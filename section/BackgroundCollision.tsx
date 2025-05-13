import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GlobeDemo } from "./GlobeDemos";

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl relative z-20 font-bold text-center text-black dark:text-white font-sans tracking-tight leading-tight">
          <span className="block mb-4">Looking for Freelance work,</span>
          <span className="block mb-8">Full/Part time role</span>
          <div className="relative mx-auto inline-block [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] w-full bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Open to Work</span>
            </div>
            <div className="relative w-full bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="block">Open to Work</span>
            </div>
            <div className="mt-8 sm:mt-12">
              <GlobeDemo />
            </div>
          </div>
        </h2>
      </div>
    </BackgroundBeamsWithCollision>
  );
}


export { BackgroundBeamsWithCollisionDemo };


/*
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GlobeDemo } from "./GlobeDemos";

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
          <div className="my-5">
            <GlobeDemo/>
          </div>
        </div>
      </h2>
      
    </BackgroundBeamsWithCollision>
  );
}

export { BackgroundBeamsWithCollisionDemo };
*/