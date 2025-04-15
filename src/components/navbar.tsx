"use client";

import gsap, { Expo } from "gsap";
import React, { useEffect } from "react";

const Navbar = () => {
  function animateMe() {
    gsap.from(".nav", {
      y: "-10",
      opacity: 0,
      delay: 0.2,
      duration: 1,
      ease: Expo.easeInOut,
    });
  }

  useEffect(() => {
    animateMe();
  }, []);

  return (
    <div className="nav   flex  items-center h-24 justify-between w-full px-[40px] py-[30px]">
      <p className="font-semibold tracking-tight text-sm md:text-lg">
        Soumen Mondal
      </p>
      <p className="uppercase font-bold text-sm md:text-lg">Menu +</p>
    </div>
  );
};

export default Navbar;
