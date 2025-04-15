"use client";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Second = () => {
  const router = useRouter();

  useEffect(() => {
    const elems = document.querySelectorAll<HTMLDivElement>(".elem");
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;
      gsap.to(cursor, {
        x: e.clientX - 40,
        y: e.clientY - 40,
        duration: 0.15,
        ease: "power3.out",
        rotate: () => gsap.utils.random(-10, 10),
      });
    };

    const handlers: {
      elem: HTMLDivElement;
      onMouseMove: (e: MouseEvent) => void;
      onMouseEnter: () => void;
      onMouseLeave: () => void;
    }[] = [];

    elems.forEach((elem) => {
      const image = elem.querySelector("img") as HTMLImageElement;
      let prevX = 0;

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const diffrotate = x - prevX;
        prevX = x;

        const imageX = x - image.offsetWidth / 2;
        const imageY = y - image.offsetHeight / 2;

        gsap.to(image, {
          opacity: 1,
          ease: "power3.out",
          top: imageY,
          left: imageX,
          duration: 0.3,
          rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.8),
        });

        if (cursor) {
          cursor.style.opacity = "1";
          moveCursor(e);
        }
      };

      const onMouseEnter = () => {
        if (cursor) cursor.style.opacity = "1";
      };

      const onMouseLeave = () => {
        gsap.to(image, {
          opacity: 0,
          duration: 0.3,
        });
        if (cursor) cursor.style.opacity = "0";
      };

      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);

      handlers.push({ elem, onMouseMove, onMouseEnter, onMouseLeave });
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      handlers.forEach(({ elem, onMouseMove, onMouseEnter, onMouseLeave }) => {
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
      });
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="second w-full h-fit pt-[200px] text-white pr-[10vw] tracking-tighter font-semibold relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        id="custom-cursor"
        className="sm:fixed hidden top-0 left-0 z-[10000] w-[80px] h-[80px] bg-gray-200 text-black tracking-wider rounded-full sm:flex items-center justify-center text-sm font-bold pointer-events-none opacity-0 transition-opacity duration-300"
      >
        Visit
      </div>

      {/* Education */}
      <div
        onClick={() => {
          return router.push("/educations");
        }}
        className="elem relative h-auto w-full border-t border-[#888] py-[2vw] px-[3vw] flex items-center justify-between"
      >
        <img
          src="/education.jpeg"
          alt="education"
          className="absolute z-[9999] h-[140%] opacity-0 pointer-events-none"
        />
        <h1 className="uppercase text-[7.6vw] opacity-[.7] z-10">Education</h1>
      </div>

      {/* About Me */}
      <div
        onClick={() => {
          return router.push("/about");
        }}
        className="elem relative w-full border-t border-[#888] py-[2vw] px-[3vw] flex items-center justify-between"
      >
        <img
          src="/me.jpg"
          alt="me"
          className="absolute z-40 h-[140%] opacity-0 pointer-events-none"
        />
        <h1 className="uppercase text-[7.6vw] opacity-[.7] z-10">About Me</h1>
      </div>

      {/* Projects */}
      <div
        onClick={() => {
          return router.push("/projects");
        }}
        className="elem relative w-full border-y border-[#888] py-[2vw] px-[3vw] flex items-center justify-between"
      >
        <img
          src="/project.png"
          alt="project"
          className="absolute z-40 h-[140%] opacity-0 pointer-events-none"
        />
        <h1 className="uppercase text-[7.6vw] opacity-[.7] z-10">Projects</h1>
      </div>
    </div>
  );
};

export default Second;
