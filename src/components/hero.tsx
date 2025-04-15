"use client";

import gsap, { Expo } from "gsap";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  function animateNav() {
    gsap.to(".nav", {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 1,
      ease: Expo.easeInOut,
    });
  }

  function animateHero() {
    const tl = gsap.timeline();
    tl.to(".boundingH1", {
      y: 0,
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: 0.2,
      delay: -1,
    }).to(".heroFooter", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    });
  }

  useEffect(() => {
    // Set initial states to prevent flicker
    gsap.set(".nav", { y: -10, opacity: 0 });
    gsap.set(".boundingH1", { y: 50, opacity: 0 });
    gsap.set(".heroFooter", { y: 20, opacity: 0 });
    gsap.set(".menu-item", { x: "100%", opacity: 0 });

    animateNav();
    animateHero();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      // Opening animation from the right
      gsap.to(".menu", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.to(".menu-item", {
        x: "0%",
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    } else {
      // Closing animation to the right
      gsap.to(".menu-item", {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.in",
      });
      gsap.to(".menu", {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        delay: 0.3,
      });
    }
  };

  return (
    <div>
      <div className="nav flex items-center h-24 justify-between w-full px-[40px] py-[30px]">
        <p className="font-semibold tracking-tight text-sm md:text-lg">
          Soumen Mondal
        </p>
        <p
          className="uppercase font-bold text-sm md:text-lg cursor-pointer"
          onClick={toggleMenu}
        >
          Menu +
        </p>
      </div>

      <div className="h-[calc(100vh-6rem)] tracking-normal relative flex flex-col leading-none px-[30px] pt-[40px] font-bold">
        <div className="text-[13vw] md:text-[9vw]">
          <div className="bounding w-fit ">
            <h1 className="boundingH1 opacity-[0.7] w-fit ">FULLSTACK</h1>
          </div>
          <div className="ml-8 md:ml-[130px] w-fit">
            <div className="bounding w-fit ">
              <h1 className="boundingH1 opacity-[0.7] w-fit ">DEVELOPER</h1>
            </div>
            <div className="bounding flex flex-col items-end">
              <p className="boundingH1 opacity-100 text-white text-[2.5vw] sm:text-lg">
                Based in India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[100px] pr-[50px] uppercase">
          <div className="bounding mt-[10px] w-full flex flex-col items-end text-right text-sm uppercase">
            <p className="boundingH1 w-fit">
              AVAILABLE FOR FREELANCE <br /> FROM APRIL 1 , 2025
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="heroFooter mt-auto flex px-[2vw] flex-row w-full justify-between items-center py-2">
          <div>
            <Link
              href="/educations"
              className="flex flex-row items-center justify-center"
            >
              <span className="font-normal text-sm">Currently a learner</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
              </svg>
            </Link>
          </div>
          <div>
            <Link
              href="/projects"
              className="flex flex-row items-center justify-center"
            >
              <span className="font-normal text-sm">Web Developer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
              </svg>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link
              href="/"
              className="flex flex-row gap-1 items-center justify-center"
            >
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black w-4 h-4"
                >
                  <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                </svg>
              </span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black w-4 h-4"
                >
                  <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className="menu fixed top-0 left-auto right-0 w-full sm:w-[50vw] lg:w-[30vw] h-full bg-black text-white flex flex-col items-end justify-center opacity-0 z-50 pr-32"
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      >
        <button 
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-white font-bold"
        >
          MENU &times;
        </button>
        <ul className="space-y-8 text-3xl font-semibold text-right">
          <li className="menu-item">
            <Link href="/educations">Education</Link>
          </li>

          <li className="menu-item">
            <Link href="/projects">Projects</Link>
          </li>

          <li className="menu-item">
            <Link href="/about">About</Link>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Hero;
