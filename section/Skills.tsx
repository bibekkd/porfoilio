import { IconCloud } from "@/components/magicui/icon-cloud";
import { MagicCard } from "@/components/magicui/magic-card";

const slugs = [
    "typescript",
    "javascript",
    "python",
    "react",
    "drizzle",
    "android",
    "ios",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "supabase",
    "nginx",
    "vercel",
    "openai",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
];

const flusx = [
    "typescript",
    "javascript",
    "python",
    "react",
    "drizzle",
    "android",
    "ios",
    "html5",
    "css3",
    "node.js",
    "express",
    "next.js",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "supabase",
    "nginx",
    "vercel",
    "openai",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
]

export function IconCloudDemo() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}


const SkillSection = () => {
    return (
        <section className='flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background mt-20 md:mt-40 px-4 md:px-0'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center mb-8 md:mb-12">
                My Tech Arsenal
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-8 md:gap-4">
                <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-1/2 p-4 md:pl-20">
                    {flusx.map((text, index) => (
                        <MagicCard
                            gradientColor={"#D946EF"}
                            className="p-0 rounded-md transform transition-transform hover:scale-105 border-border bg-card/50 backdrop-blur-sm"
                            key={index}
                        >
                            <p className="bg-secondary/50 text-secondary-foreground p-2 hover:bg-secondary/80 rounded-md text-[10px] sm:text-xs font-semibold border border-border whitespace-nowrap transition-colors">
                                {text}
                            </p>
                        </MagicCard>
                    ))}
                </div>
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700/10 to-fuchsia-700/10 blur-3xl rounded-full" />
                    <div className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <IconCloudDemo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillSection

{/* <section className='flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background mt-40'>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">My Tech Arsenal</h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-auto overflow-hidden">
                <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-1/2 md:pl-20">
                    {flusx.map((text, index) => (
                        <MagicCard gradientColor={"#b802eb" }
                        className="p-0 rounded-md" key={index}>
                            <p className="bg-white text-black p-2 hover: bg-white/65 rounded-md text-xs font-semibold border-1">
                                {text}
                            </p>
                        </MagicCard>
                    ))}
                </div>
                <div className="w-auto md:w-1/2 h-[400px]">
                    <IconCloudDemo/>
                </div>
            </div>
        </section> */}