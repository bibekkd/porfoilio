
import { BackgroundBeamsWithCollisionDemo } from "@/section/BackgroundCollision";
import ConnectWithMe from "@/section/ConnectWithMe";
import { HeroDemo } from "@/section/DemoHero";
import Education from "@/section/Education";
import { GlobeDemo } from "@/section/GlobeDemos";
import Projects from "@/section/Projects";
import SkillSection from "@/section/Skills";

export default function Home() {
  return(
    <>
      <HeroDemo/>
      <SkillSection/>
      <Education/>
      <Projects/>
        <BackgroundBeamsWithCollisionDemo/>
        
      
      <ConnectWithMe/>
    </>
  )
}
