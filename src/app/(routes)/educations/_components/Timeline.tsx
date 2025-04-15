"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyTimeline() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completed my Schooling from{" "}
            <span className="font-bold">Baishnabchak M.C. High School</span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipPSQNFjCTh-0J6dZIBQXf6hJwcYJ8kvC4clhWfZ=s1360-w1360-h1020"
              alt="BMCHS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipO3bPy66ZO9ounYHg5AYl02d5_OhhWyb-NwaG7y=s1360-w1360-h1020"
              alt="BMCHS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipO3bPy66ZO9ounYHg5AYl02d5_OhhWyb-NwaG7y=s1360-w1360-h1020"
              alt="BMCHS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipNs1lwrvj4AsxsKpqXJ4_v3F7JAAQvXCYoepvOT=s1360-w1360-h1020"
              alt="BMCHS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I took admission into B.Tech CSE at Narula Institute of Technology,
            Agarpara, Kolkata
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            With that continues my web development journey. Every day I strive
            to improve myself.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB9DditXNAb1AgQEPhP7ieLQBvDDxQhNFdrdorfVGVL1CvK9o9i6zb_DDHrnRAcoiwD86D0CnsdWTdKpIjj6kt0oq-MY77JlU2pJZWF4dYGTFcX46_GzFuBd9nKmPPisyg0cnExj=s1360-w1360-h1020"
              alt="NIT Campus"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjomhOA2198RLn1z8oQnyBh92Qx-aWCfPFJLKJFtqTqTbZiYQ6dB6UW17fHK5-73aLKM&usqp=CAU"
              alt="NIT Building"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://www.admissionmba.in/wp-content/uploads/2019/05/NIT-Kolkata-Admission.jpg.webp"
              alt="NIT Campus View"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://eduscope.co.in/wp-content/uploads/2025/01/narula-institute-of-technology-NIT-4.jpeg"
              alt="NIT Entrance"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024-2025",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Mastered multiple programming languages including C, C++, Python,
            Java, JavaScript, and TypeScript
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Mastered C, C++ and object-oriented programming concepts
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Developed projects using HTML, CSS, JavaScript, and TypeScript
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Gained expertise in frameworks like React, Next.js, Tailwind
              CSS, and Laravel
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Built production-ready applications using React, Next.js, and
              Tailwind CSS
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Actively seeking opportunities to apply skills and gain
              real-world experience
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {[
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                alt: "HTML5",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                alt: "CSS3",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                alt: "JavaScript",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                alt: "TypeScript",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                alt: "React",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                alt: "Next.js",
              },
              {
                src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
                alt: "Tailwind CSS",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                alt: "Node.js",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                alt: "Express",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                alt: "MongoDB",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                alt: "PostgreSQL",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                alt: "Redux",
              },
              {
                src: "https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png",
                alt: "Django",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                alt: "GitHub",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
                alt: "Webpack",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
                alt: "Babel",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                alt: "Sass",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                alt: "Docker",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
                alt: "Jest",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
                alt: "GraphQL",
              },
            ].map((tech, index) => (
              <Image
                key={index}
                src={tech.src}
                alt={tech.alt}
                width={300}
                height={300}
                className={`rounded-lg object-contain h-12 md:h-20 lg:h-24 w-full p-2 shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] ${
                  tech.alt === "Express" ? "bg-white" : ""
                }`}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
    </div>
  );
}
