"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MyCard } from "./_components/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const page = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-black text-white py-6">
      <div className="w-full text-2xl text-center p-8 rounded-lg mx-auto max-w-3xl shadow-lg">
        <p className="font-bold mb-4 text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Disclaimer: Projects will be added upon completion
        </p>
        <p className="text-gray-400 text-sm">
          This is a curated selection of my projects
        </p>
        <p className="text-sm">
          To explore my complete portfolio of current projects, please visit my{" "}
          <span
            className="text-lg cursor-pointer font-bold px-2"
            onClick={() => router.replace("https://github.com/TheSoumenMondal")}
          >
            GitHub profile
          </span>
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 ">
        <MyCard
          title="Flash"
          description="Code to web application in just a minute with the help of Gemini AI"
          image="/flash.png"
          deployLink="https://flash-nine-henna.vercel.app/"
          githubLink="https://github.com/TheSoumenMondal/flash"
        />
        <MyCard
          title="AI Object Detector"
          description="AN ai object detector which can detect objects using the device camers"
          image="/obj.png"
          deployLink="https://ai-object-detector-xb6p.vercel.app/"
          githubLink="https://github.com/TheSoumenMondal/ai-object-detector"
        />
        <MyCard
          title="Fast Finger"
          description="Improve your typing speed with this game"
          image="/flash.png"
          deployLink="https://github.com/TheSoumenMondal/Fast-Finger"
          githubLink="https://fast-finger-alpha.vercel.app/"
        />
      </div>

      <div className="w-full flex justify-between mb-3 px-6">
        <Button
          className="text-white"
          variant={"link"}
          onClick={() => router.replace("/")}
        >
          Home
        </Button>
        <Button
          variant={"link"}
          className="text-white"
          onClick={() => router.replace("https://github.com/TheSoumenMondal")}
        >
          Other Projects <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default page;
