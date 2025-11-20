import { Hero } from "@/components/blocks/hero"

function HeroDemo() {
  return (
    <Hero
      title="Hi, I'm Bibek "
      subtitle="Crafting Scalable Apps at the Edge of AI and the Blockchain Revolution."
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { HeroDemo }