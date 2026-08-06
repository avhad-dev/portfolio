"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function GenerativeForm() {
  const meshRef = useRef<THREE.Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);
  const prefersReducedMotion = useReducedMotion();

  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (!prefersReducedMotion) {
      // Subtle pointer tracking
      targetRotation.current.x = (state.pointer.y * Math.PI) / 10;
      targetRotation.current.y = (state.pointer.x * Math.PI) / 10;

      meshRef.current.rotation.x = THREE.MathUtils.damp(
        meshRef.current.rotation.x,
        targetRotation.current.x,
        2,
        delta
      );
      meshRef.current.rotation.y = THREE.MathUtils.damp(
        meshRef.current.rotation.y,
        targetRotation.current.y,
        2,
        delta
      );
    }

    // Slow ambient rotation
    meshRef.current.rotation.z += delta * 0.05;

    // Pulse distortion slightly
    if (materialRef.current && !prefersReducedMotion) {
      const time = state.clock.getElapsedTime();
      materialRef.current.distort = 0.3 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 32]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#F2F0EA"
        wireframe
        distort={prefersReducedMotion ? 0 : 0.3}
        speed={prefersReducedMotion ? 0 : 1.5}
        transparent
        opacity={0.15}
      />
    </Icosahedron>
  );
}
