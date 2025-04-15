import React from "react";
import { PinCard } from "./_components/PinCard";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row relative">
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-white hover:text-gray-300 transition-colors duration-200 flex items-center gap-2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to Home
      </Link>
      <div className="w-full h-full flex items-center justify-center px-6 lg:pl-64">
        <div>
          <h1 className="text-3xl mb-6 text-white font-bold">
            About Soumen <br />{" "}
            <span className="text-gray-400">
              More than just a title—let&apos;s dive deeper!
            </span>
          </h1>
          <div className="text-white text-sm flex flex-col gap-2">
            <p>
              I am a passionate Software Engineer with a knack for building
              full-stack web applications using modern technologies like Next.js
              and Tailwind CSS. My journey in tech began with a curiosity for
              solving real-world problems through innovative solutions, which
              evolved into a love for crafting user-centric digital experiences.
            </p>
            <p>
              With a strong foundation in JavaScript and  frameworks, I focus on
              creating scalable, efficient, and visually appealing applications.
              Currently, I am diving deeper into machine learning to expand my
              skill set and deliver versatile, cross-platform solutions.
            </p>
            <p>
              {" "}
              Beyond coding, I thrive in collaborative environments and enjoy
              tackling challenging problems with creative solutions. I aim to
              contribute to impactful projects that make a difference in users'
              lives.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden md:flex">
        <PinCard />
      </div>
    </div>
  );
};

export default page;
