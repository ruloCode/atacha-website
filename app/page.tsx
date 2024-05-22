"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { Group } from "three";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Alfa from "@/components/Alfa";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  const { user } = useUser();

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-white ">
      <Header />
      <Hero />
      <Alfa />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
