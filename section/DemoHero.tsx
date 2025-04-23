import { Hero } from "@/components/blocks/hero"

function HeroDemo() {
  return (
    <Hero
      title="Hi, I'm Bibek "
      subtitle="Tech Enthusiast turned Software Engineer . I love building things and helping people. Very active on Twitter."
    //   actions={[
    //     {
    //       label: "Try Demo",
    //       href: "#",
    //       variant: "outline"
    //     },
    //     {
    //       label: "Start Free",
    //       href: "#",
    //       variant: "default"
    //     }
    //   ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { HeroDemo }