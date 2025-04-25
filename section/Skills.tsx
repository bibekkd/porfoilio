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
        <section className='flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background mt-40'>
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
        </section>
    )
}

export default SkillSection