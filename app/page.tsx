"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { inter, open_sans } from "./ui/fonts";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { Group } from "three";
import styles from "./page.module.css";

const ParticleRing = () => {
  return (
    <div className="relative ">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "60vh" }} // Changed the height to 60vh
        className="bg-[#130921] relative"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="absolute top-[35%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex items-center justify-center">
        <Image alt="logo" src="/Atacha_logo.svg" width={80} height={80} />
        <span className={styles.logoTitle}>tacha IA</span>
      </div>

      <div className="text-white font-bold py-12 text-center space-y-3">
        <div className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-extrabold ">
          <h1>La mejor herramienta IA para</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-4">
            <TypewriterComponent
            options={{
              strings: ["tu empresa", "tu negocio", "tu vida"],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Impulsa tu idea 10x usando IA
        </div>
        <div>
          <Link href="/sign-in">
            <Button variant="secondary" className="md:text-lg p-4 md:p-6">
              Comenzar ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
  return (
    // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
