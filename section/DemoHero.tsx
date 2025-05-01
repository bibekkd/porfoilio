import { Hero } from "@/components/blocks/hero"

function HeroDemo() {
  return (
    <Hero
      title="Hi, I'm Bibek "
      subtitle="Crafting Scalable Apps at the Edge of AI and the Blockchain Revolution."
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