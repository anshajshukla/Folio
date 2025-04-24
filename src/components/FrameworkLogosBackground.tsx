// @ts-nocheck
"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Stars, ContactShadows, Text, useGLTF, MeshDistortMaterial } from "@react-three/drei";

// SVG logo as a mesh using drei Html
const LogoPlane: React.FC<{ children: React.ReactNode; position: [number, number, number]; speed?: number; scale?: number }> = ({ children, position, speed = 0.5, scale = 1 }) => {
  const ref = React.useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 * speed;
      ref.current.rotation.x += 0.005 * speed;
      ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.2;
    }
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <Html center>{children}</Html>
    </group>
  );
};

export default function FrameworkLogosBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} shadows>
        {/* Lighting and glow */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-6, -2, 6]} intensity={2} color="#6ee7b7" />
        <pointLight position={[6, 4, -4]} intensity={1.6} color="#818cf8" />
        <Stars radius={30} depth={60} count={150} factor={3} saturation={0.8} fade />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.35} width={10} height={10} blur={2.5} far={10} />
        <Suspense fallback={null}>
          {/* Tech Stack Logos */}
          <LogoPlane position={[-4, 2, -2]} speed={0.5}>
            <div className="h-10 w-10 bg-blue-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              Py
            </div>
          </LogoPlane>
          
          <LogoPlane position={[4, -2, -1]} speed={0.7}>
            <div className="h-10 w-10 bg-orange-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              TF
            </div>
          </LogoPlane>
          
          <LogoPlane position={[-3, -3, 0]} speed={0.4}>
            <div className="h-10 w-10 bg-red-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              PT
            </div>
          </LogoPlane>
          
          <LogoPlane position={[3, 3, -2]} speed={0.6}>
            <div className="h-10 w-10 bg-cyan-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              Re
            </div>
          </LogoPlane>
          
          <LogoPlane position={[0, -4, -3]} speed={0.5}>
            <div className="h-10 w-10 bg-yellow-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              JS
            </div>
          </LogoPlane>
          
          <LogoPlane position={[-5, 0, -1]} speed={0.3}>
            <div className="h-10 w-10 bg-green-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              Np
            </div>
          </LogoPlane>
          
          <LogoPlane position={[5, 1, -3]} speed={0.45}>
            <div className="h-10 w-10 bg-purple-500/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white font-bold">
              Pd
            </div>
          </LogoPlane>
        </Suspense>
        {/* Removed OrbitControls to disable mouse rotation */}
      </Canvas>
    </div>
  );
}