import ConnectWithMe from "@/section/ConnectWithMe";
import { HeroDemo } from "@/section/DemoHero";
import Education from "@/section/Education";
import Projects from "@/section/Projects";
import SkillSection from "@/section/Skills";

export default function Home() {
  return(
    <>
      <HeroDemo/>
      <SkillSection/>
      <Education/>
      <Projects/>
      <ConnectWithMe/>
    </>
  )
}
