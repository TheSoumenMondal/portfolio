'use client';

import React from "react";
import { MyTimeline } from "./_components/Timeline";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full h-fit overflow-hidden">
      <div className="w-full h-full p-2 lg:p-10">
        <MyTimeline />
      </div>
      <div className="flex flex-col w-full sm:flex-row md:justify-between lg:px-64 md:mb-16">
        <Button
          onClick={() => router.push("/")}
          variant={"link"}
          className="text-white cursor-pointer"
        >
          Back
        </Button>
        <Button
          onClick={() => router.push("/projects")}
          variant={"link"}
          className="text-white cursor-pointer"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page;
