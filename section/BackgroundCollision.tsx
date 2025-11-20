import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GlobeDemo } from "./GlobeDemos";

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground font-sans tracking-tight leading-tight mb-6">
            Ready to bring your <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
              ideas to life?
            </span>
          </h2>

          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Available for Freelance Projects & Full-time Roles
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Work
            </div>
          </div>

          <div className="mt-4 sm:mt-8 w-full max-w-[600px]">
            <GlobeDemo />
          </div>
        </div>
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