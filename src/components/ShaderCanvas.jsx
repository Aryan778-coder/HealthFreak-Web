import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ShaderCanvas({
  className = "",
  intensity = 1.0,
  interactive = true,
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, speed: 0 });
  const lastMousePos = useRef({ x: 0.5, y: 0.5, time: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Orthographic Camera for Fullscreen Quad
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Custom Liquid RGB Displacement Shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_velocity;
      uniform float u_intensity;
      varying vec2 vUv;

      // Simplex Noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        st.x *= u_resolution.x / u_resolution.y;

        vec2 mouse = u_mouse;
        mouse.x *= u_resolution.x / u_resolution.y;

        float dist = distance(st, mouse);
        float mouseInfluence = smoothstep(0.45, 0.0, dist) * (1.0 + u_velocity * 4.0);

        // Fluid waves
        float t = u_time * 0.45;
        float n1 = snoise(st * 2.5 + vec2(t * 0.2, t * 0.3));
        float n2 = snoise(st * 4.0 - vec2(t * 0.4, n1 * 0.5));
        float combinedNoise = (n1 + n2 * 0.5) * u_intensity;

        // Chromatic Aberration UV Offsets
        vec2 rOffset = vec2(combinedNoise * 0.04 + mouseInfluence * 0.03, 0.0);
        vec2 bOffset = vec2(-combinedNoise * 0.04 - mouseInfluence * 0.03, 0.0);

        // Color Palettes: Electric Cobalt (#315BFF), Vivid Coral (#FF6659), Acid Lime (#D5F45B)
        vec3 colorCobalt = vec3(0.192, 0.357, 1.0);
        vec3 colorCoral  = vec3(1.0, 0.4, 0.349);
        vec3 colorLime   = vec3(0.835, 0.957, 0.357);
        vec3 colorDark   = vec3(0.063, 0.075, 0.118);

        float rVal = snoise(st * 3.0 + rOffset + t * 0.3);
        float gVal = snoise(st * 3.0 + t * 0.3);
        float bVal = snoise(st * 3.0 + bOffset + t * 0.3);

        vec3 col = mix(colorDark, colorCobalt, smoothstep(-0.4, 0.5, rVal));
        col = mix(col, colorCoral, smoothstep(0.2, 0.8, gVal) * 0.6);
        col = mix(col, colorLime, smoothstep(0.4, 0.95, bVal) * (0.35 + mouseInfluence * 0.5));

        // Vignette & Ambient Alpha
        float edgeAlpha = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x) *
                          smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);

        gl_FragColor = vec4(col, (0.55 + combinedNoise * 0.25) * edgeAlpha);
      }
    `;

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_velocity: { value: 0.0 },
      u_intensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
    });
    materialRef.current = material;

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    // 4. Pointer and Scroll Velocity Tracking
    const handlePointerMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      const now = Date.now();
      const dt = lastMousePos.current.time ? Math.max(1, now - lastMousePos.current.time) : 16;
      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      mouseRef.current = { x, y, speed: Math.min(speed * 200, 3.0) };
      lastMousePos.current = { x, y, time: now };
    };

    window.addEventListener("pointermove", handlePointerMove);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      renderer.setSize(newW, newH);
      uniforms.u_resolution.value.set(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // 5. Render Loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      uniforms.u_time.value = elapsed;
      uniforms.u_mouse.value.set(mouseRef.current.x, mouseRef.current.y);

      // Decay velocity
      mouseRef.current.speed *= 0.94;
      uniforms.u_velocity.value = mouseRef.current.speed;

      renderer.render(scene, camera);
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
    };
  }, [intensity, interactive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    />
  );
}
