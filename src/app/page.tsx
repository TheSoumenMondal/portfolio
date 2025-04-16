"use client";

import AboutMe from "@/components/aboutme";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Second from "@/components/Second";
import React, { useEffect, useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: -15, y: -15 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const circleStyle = {
    left: `${mousePosition.x - 6}px`,
    top: `${mousePosition.y - 6}px`,
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <TextHoverEffect text="SM" />
      </div>
    );
  }

  return (
    <div className="bg-black text-white flex flex-col relative select-none">
      <div
        className="circle h-3 w-3 hidden md:fixed rounded-full bg-white z-[99] pointer-events-none transition-transform duration-150 ease-out"
        style={circleStyle}
      />

      <Hero />
      <Second />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Page;
