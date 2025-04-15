import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";


const AboutMe = () => {
  const handleClick = () => {
    window.location.href = `mailto:thesoumenmondal50@gmail.com`;
  };

  return (
    <div className="relative h-screen pt-[100px] sm:pt-[200px] bg-black flex flex-col items-center justify-between px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:max-w-2xl px-10 gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full">
            <Image
              src="/me.jpg"
              alt="Soumen Mondal"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-white text-lg flex flex-col">
          <h1 className="text-2xl font-bold mb-2">I&apos;m Soumen Mondal</h1>
          <p className="text-sm">
            A proactive full-stack developer from Kolkata with a passion for
            building dynamic web experiences. Currently studying at Narula
            Institute of Technology, I specialize in modern JavaScript
            technologies and clean code development. My core expertise lies in
            the MERN stack and Next.js, which I use to build fast, scalable web
            applications. I have a strong foundation in TypeScript, C, C++, and
            Python, enabling me to work across different development layers.
            From designing intuitive frontend to engineering robust backends,
            I'm passionate about the entire development process. Driven by
            curiosity and continuous learning, I'm always ready to embrace new
            challenges and create better solutions.
          </p>
          <div className="mt-8">
            <InteractiveHoverButton
              onClick={handleClick}
              className="w-auto text-sm bg-white text-black hover:border-black"
            >
              Let&apos;s connect
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
