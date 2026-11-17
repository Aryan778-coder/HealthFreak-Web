import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Activity, Zap, Compass, RotateCw } from "lucide-react";

export default function KineticGimbal({ className = "" }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const angularVelocityRef = useRef({ x: 0.005, y: 0.008 });
  const ringsGroupRef = useRef(null);
  const [rpm, setRpm] = useState(48);
  const [telemetryState, setTelemetryState] = useState("OPTIMAL (98.4%)");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 380;
    const height = mount.clientHeight || 380;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 3. Lighting
    const amb = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(amb);

    const pt1 = new THREE.PointLight(0x315bff, 45, 10);
    pt1.position.set(3, 3, 3);
    scene.add(pt1);

    const pt2 = new THREE.PointLight(0xd5f45b, 35, 10);
    pt2.position.set(-3, -3, 2);
    scene.add(pt2);

    const pt3 = new THREE.PointLight(0xff6659, 30, 8);
    pt3.position.set(0, 3, -2);
    scene.add(pt3);

    // 4. Interactive 3-Axis Gimbal System
    const mainGroup = new THREE.Group();
    ringsGroupRef.current = mainGroup;
    scene.add(mainGroup);

    // Ring 1 (Outer - Electric Cobalt Titanium)
    const ring1Geo = new THREE.TorusGeometry(1.4, 0.035, 16, 80);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x315bff,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x172b80,
      emissiveIntensity: 0.3,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    mainGroup.add(ring1);

    // Ring 2 (Middle - Acid Lime Alloy)
    const ring2Geo = new THREE.TorusGeometry(1.15, 0.03, 16, 70);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xd5f45b,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x5a6d1a,
      emissiveIntensity: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    mainGroup.add(ring2);

    // Ring 3 (Inner - Vivid Coral Specular)
    const ring3Geo = new THREE.TorusGeometry(0.9, 0.025, 16, 60);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0xff6659,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x8a2018,
      emissiveIntensity: 0.25,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 4;
    mainGroup.add(ring3);

    // Central Glowing Energy Core (Holographic Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(0.48, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.7,
      iridescence: 1.0,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(core);

    // Inner Synapse Light
    const innerLight = new THREE.PointLight(0xd5f45b, 15, 3);
    mainGroup.add(innerLight);

    // 5. Drag & Momentum Event Handlers
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;

      angularVelocityRef.current.y = dx * 0.008;
      angularVelocityRef.current.x = dy * 0.008;

      mainGroup.rotation.y += dx * 0.008;
      mainGroup.rotation.x += dy * 0.008;

      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    mount.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // 6. Animation Loop with Friction & Dynamic Spin
    let clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!isDraggingRef.current) {
        // Apply friction
        angularVelocityRef.current.x *= 0.96;
        angularVelocityRef.current.y *= 0.96;

        // Maintain gentle base idle rotation
        if (Math.abs(angularVelocityRef.current.x) < 0.002) angularVelocityRef.current.x = 0.002;
        if (Math.abs(angularVelocityRef.current.y) < 0.004) angularVelocityRef.current.y = 0.004;

        mainGroup.rotation.x += angularVelocityRef.current.x;
        mainGroup.rotation.y += angularVelocityRef.current.y;
      }

      // Independent ring gimbal spin
      ring1.rotation.z += 0.008;
      ring2.rotation.x += 0.012;
      ring3.rotation.y -= 0.015;

      // Organic heartbeat pulse of central core
      const pulse = 1.0 + Math.sin(elapsed * 4.5) * 0.08;
      core.scale.set(pulse, pulse, pulse);
      innerLight.intensity = 10 + Math.sin(elapsed * 4.5) * 8;

      // Calculate approximate RPM
      const currentSpeed =
        Math.sqrt(
          angularVelocityRef.current.x * angularVelocityRef.current.x +
            angularVelocityRef.current.y * angularVelocityRef.current.y
        ) * 1200;
      const computedRpm = Math.round(Math.max(24, Math.min(currentSpeed, 320)));
      setRpm(computedRpm);
      if (computedRpm > 180) {
        setTelemetryState("ACCELERATED (99.8%)");
      } else if (computedRpm > 80) {
        setTelemetryState("KINETIC (98.9%)");
      } else {
        setTelemetryState("OPTIMAL (98.4%)");
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mount.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      cancelAnimationFrame(frameId);
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className={`relative rounded-3xl bg-[#0D111D] border border-white/10 p-6 shadow-2xl flex flex-col items-center select-none overflow-hidden ${className}`}
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#315BFF]/10 via-transparent to-[#D5F45B]/10 pointer-events-none" />

      {/* Header Telemetry */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 z-10 border-b border-white/10 pb-3">
        <span className="flex items-center gap-2 text-[#D5F45B]">
          <RotateCw className="w-3.5 h-3.5 animate-spin" /> KINETIC GYROSCOPE
        </span>
        <span className="text-white font-bold">{rpm} RPM</span>
      </div>

      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-[280px] sm:w-[320px] md:w-[360px] h-[280px] sm:h-[320px] md:h-[360px] cursor-grab active:cursor-grabbing relative z-10 flex items-center justify-center"
        style={{ touchAction: "none" }}
      />

      {/* Drag instruction pill */}
      <div className="z-10 -mt-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
        <Compass className="w-3 h-3 text-[#315BFF]" />
        <span>CLICK &amp; DRAG TO SPIN GIMBAL IN 3D SPACE</span>
      </div>

      {/* Live Telemetry Readout */}
      <div className="w-full grid grid-cols-3 gap-2 text-center z-10 pt-3 border-t border-white/10 text-xs font-mono">
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
          <div className="text-[10px] text-zinc-500">ENERGY PACE</div>
          <div className="font-bold text-[#FF6659] flex items-center justify-center gap-1 mt-0.5">
            <Activity className="w-3 h-3 animate-pulse" /> OPTIMAL
          </div>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
          <div className="text-[10px] text-zinc-500">MOTION</div>
          <div className="font-bold text-[#D5F45B] mt-0.5">{telemetryState.split(" ")[0]}</div>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
          <div className="text-[10px] text-zinc-500">ACTIVITY</div>
          <div className="font-bold text-[#315BFF] flex items-center justify-center gap-1 mt-0.5">
            <Zap className="w-3 h-3" /> 94% GOAL
          </div>
        </div>
      </div>
    </div>
  );
}
