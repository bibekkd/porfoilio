import ProjectCard from '@/components/ProjectCard'

const ProjectData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS showcasing my projects and skills.",
    liveLink: "https://bibek-kumar-dey.vercel.app",
    sourceLink: "https://github.com/bibekkd/porfoilio",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Magic UI"]
  },
  {
    title: "Interview Preparation App",
    description: "A AI interview agents helps you prepare real-time interview using Vapi voice AI agent funcationality.",
    liveLink: "https://interview-prep-project.vercel.app",
    sourceLink: "https://github.com/bibekkd/interview-prep-project",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "vapi ai", "Gemini", "Firebase"]
  },
  {
    title: "AI Notes App",
    description: "A AI notes taking app simplies complex notes taking process by simple ui/ux with AI summarization.",
    liveLink: "https://smart-notes-ecru.vercel.app/",
    sourceLink: "https://github.com/bibekkd/ai-notes-app",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Gemini", "Supabase"]
  },
  {
    title: "Landing Page",
    description: "A landing page website built with Next.js and Tailwind CSS, Framer, Shadcn.",
    liveLink: "https://landing-page-olive-five-59.vercel.app/",
    sourceLink: "https://github.com/bibekkd/landing-page",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion"]
  }
];

const FreelanceProjectData = [
  {
    title: "Seamless.photos AI",
    description: "A freelance project built with Next.js and Tailwind CSS.",
    liveLink: "https://seamless-photos-pi.vercel.app/",
    sourceLink: "https://github.com/bibekkd/seamless.photos",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "Supabase", "OpenAI", "Replicate", "Drizzle ORM"]
  }
]

const Projects = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background px-4 sm:px-6 lg:px-8 pb-20'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground text-center my-8 sm:my-10 md:my-12 lg:my-15'>
        Projects
      </h1>
      <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 rounded-lg p-3 sm:p-4 md:p-5'>
        {ProjectData.map((project, index) => (
          <div key={index} className='w-full rounded-lg'>
            <ProjectCard key={index} project={project} />
          </div>
        ))}
      </div>
      <div>
      </div>
    </section>
  )
}

export default Projects
