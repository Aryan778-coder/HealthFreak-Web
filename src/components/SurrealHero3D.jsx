import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "@/utils/gsapSetup";

export default function SurrealHero3D({ scrollProgress = 0, onCoreClick }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const coreMeshRef = useRef(null);
  const ringsRef = useRef([]);
  const floatingCrystalsRef = useRef([]);
  const particlesRef = useRef(null);
  const lightsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameIdRef = useRef(null);
  const scrollRef = useRef(scrollProgress);

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Dynamic Lights (Electric Cobalt, Vivid Coral, Acid Lime, Lavender)
    const ambientLight = new THREE.AmbientLight(0x0f1422, 1.8);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x315bff, 80, 20); // Electric Cobalt
    light1.position.set(-3.5, 3, 2.5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff6659, 75, 20); // Vivid Coral
    light2.position.set(3.5, -2.5, 2.5);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xd5f45b, 65, 18); // Acid Lime
    light3.position.set(0, 4, -2);
    scene.add(light3);

    const light4 = new THREE.PointLight(0xb9a8ff, 50, 15); // Soft Lavender
    light4.position.set(2, 2.5, -1);
    scene.add(light4);

    lightsRef.current = [light1, light2, light3, light4];

    // 4. Central Surreal Morphing Core (Iridescent Chrome & Glass Biomechanical Knot)
    const coreGeo = new THREE.TorusKnotGeometry(0.88, 0.3, 140, 36, 2, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      iridescence: 1.0,
      iridescenceIOR: 1.7,
      iridescenceThicknessRange: [150, 750],
      transmission: 0.35,
      opacity: 0.96,
      transparent: true,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // 5. Concentric Iridescent Orbital Rings
    const ringGroup = new THREE.Group();
    ringsRef.current = [];
    const ringConfigs = [
      { radius: 1.7, tube: 0.016, rotX: 0.8, rotY: 0.4, color: 0x315bff },
      { radius: 2.15, tube: 0.012, rotX: -0.6, rotY: 0.9, color: 0xd5f45b },
      { radius: 2.65, tube: 0.018, rotX: 1.2, rotY: -0.5, color: 0xff6659 },
    ];

    ringConfigs.forEach((cfg) => {
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 20, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        metalness: 0.95,
        roughness: 0.15,
        emissive: cfg.color,
        emissiveIntensity: 0.25,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = cfg.rotX;
      ringMesh.rotation.y = cfg.rotY;
      ringGroup.add(ringMesh);
      ringsRef.current.push({
        mesh: ringMesh,
        speedX: (Math.random() - 0.5) * 0.008,
        speedY: (Math.random() - 0.5) * 0.012,
        baseScale: 1,
      });
    });
    scene.add(ringGroup);

    // 6. Floating Prismatic Bio-Crystals
    const crystalGroup = new THREE.Group();
    floatingCrystalsRef.current = [];
    const crystalGeos = [
      new THREE.OctahedronGeometry(0.18),
      new THREE.IcosahedronGeometry(0.15),
      new THREE.TetrahedronGeometry(0.2),
    ];
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.8,
      roughness: 0.08,
      iridescence: 1.0,
      clearcoat: 1.0,
    });

    for (let i = 0; i < 14; i++) {
      const geo = crystalGeos[i % crystalGeos.length];
      const crystal = new THREE.Mesh(geo, crystalMat);
      const angle = (i / 14) * Math.PI * 2;
      const dist = 2.2 + (i % 3) * 0.5;
      crystal.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 2.5,
        (Math.sin(angle) * dist) * 0.6 + (Math.random() - 0.5)
      );
      crystalGroup.add(crystal);
      floatingCrystalsRef.current.push({
        mesh: crystal,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: crystal.position.y,
      });
    }
    scene.add(crystalGroup);

    // 7. Glowing Particle Field (Biometric Stars)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x315bff),
      new THREE.Color(0xd5f45b),
      new THREE.Color(0xff6659),
      new THREE.Color(0xb9a8ff),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 12;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const col = palette[Math.floor(Math.random() * palette.length)];
      colorArray[i * 3] = col.r;
      colorArray[i * 3 + 1] = col.g;
      colorArray[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 8. Pointer Event Handlers
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener("pointermove", handlePointerMove);

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const pX = mouseRef.current.x;
      const pY = mouseRef.current.y;
      const scrollProgressVal = scrollRef.current;

      // Rotate central core
      if (coreMeshRef.current) {
        coreMeshRef.current.rotation.x = elapsedTime * 0.35 + pY * 0.4;
        coreMeshRef.current.rotation.y = elapsedTime * 0.45 + pX * 0.6;
        coreMeshRef.current.rotation.z = Math.sin(elapsedTime * 0.2) * 0.3;

        // Scale & dissolve with scroll
        const s = Math.max(0.2, 1 - scrollProgressVal * 0.7);
        coreMeshRef.current.scale.set(s, s, s);
      }

      // Rotate orbital rings
      ringsRef.current.forEach((r, idx) => {
        r.mesh.rotation.x += r.speedX;
        r.mesh.rotation.y += r.speedY;
        r.mesh.rotation.z = Math.sin(elapsedTime * 0.3 + idx) * 0.2;

        // Rings expand outward on scroll like an opening portal
        const expandFactor = 1 + scrollProgressVal * 1.8;
        r.mesh.scale.set(expandFactor, expandFactor, expandFactor);
      });

      // Float crystals
      floatingCrystalsRef.current.forEach((c) => {
        c.mesh.rotation.x += c.rotSpeed;
        c.mesh.rotation.y += c.rotSpeed * 1.2;
        c.mesh.position.y = c.baseY + Math.sin(elapsedTime * 1.5 + c.floatOffset) * 0.25;
      });

      // Drift particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.04 + pX * 0.15;
        particlesRef.current.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1 - pY * 0.15;
      }

      // Dynamic light orbits
      if (lightsRef.current.length >= 4) {
        lightsRef.current[0].position.x = Math.sin(elapsedTime * 0.8) * 4 - pX * 2;
        lightsRef.current[0].position.y = Math.cos(elapsedTime * 0.7) * 3 + pY * 2;

        lightsRef.current[1].position.x = Math.cos(elapsedTime * 0.9) * 4 + pX * 2;
        lightsRef.current[1].position.y = Math.sin(elapsedTime * 0.6) * 3 - pY * 2;
      }

      // Camera parallax & zoom with scroll
      camera.position.x = pX * 0.8;
      camera.position.y = pY * 0.6;
      // Scroll swoops camera forward
      camera.position.z = 5.8 - scrollProgressVal * 2.8;
      camera.lookAt(0, 0, 0);

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
      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  const handleClick = (e) => {
    if (coreMeshRef.current) {
      gsap.to(coreMeshRef.current.scale, {
        x: 1.35,
        y: 1.35,
        z: 1.35,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }
    if (onCoreClick) onCoreClick(e);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing z-0 overflow-hidden"
      style={{ touchAction: "none" }}
    />
  );
}
