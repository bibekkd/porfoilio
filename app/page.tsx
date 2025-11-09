
import { BackgroundBeamsWithCollisionDemo } from "@/section/BackgroundCollision";
import ConnectWithMe from "@/section/ConnectWithMe";
import { HeroDemo } from "@/section/DemoHero";
import Education from "@/section/Education";
import Projects from "@/section/Projects";
import SkillSection from "@/section/Skills";
import Experience from "@/section/Experience";

export default function Home() {
  return(
    <>
      <HeroDemo/>
      <SkillSection/>
      <Experience/>
      <Education/>
      <Projects/>
      <BackgroundBeamsWithCollisionDemo/>
      <ConnectWithMe/>
    </>
  )
}
