"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

const Footer = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
      });
      setTime(currentTime);
    };

    updateTime(); // Set initial time after mount

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear(); // This won't change and is safe for SSR

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#646cff" },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
      className="w-full h-16 md:px-10 md:mt-0 mt-32 flex flex-col-reverse md:flex-row justify-between items-center"
    >
      <motion.div 
        className="dates flex flex-row gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {time ?? "..."}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {currentYear}
        </motion.p>
      </motion.div>
      <Separator className="md:hidden my-3" />
      <motion.div 
        className="links w-full md:w-auto gap-10 flex justify-between px-5 font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {["Github", "LinkedIn", "Instagram", "X"].map((platform, index) => (
          <motion.div
            key={platform}
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              href={
                platform === "Github" ? "https://github.com/TheSoumenMondal" :
                platform === "LinkedIn" ? "http://www.linkedin.com/in/thesoumenmondal50" :
                platform === "Instagram" ? "https://www.instagram.com/thesoumenmondal/" :
                "https://x.com/soumendotcom"
              }
            >
              {platform}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Footer;
