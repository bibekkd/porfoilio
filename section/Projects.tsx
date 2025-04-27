import ProjectCard from '@/components/ProjectCard'
import { PulsatingButtonDemo } from '@/components/PulsatingButtonDemo';
import React from 'react'

const ProjectData = [{
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
    sourceLink: "https://github.com/bibekkd/preswald_intern_project",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Gemini", "Supabase"]
  },
  {
    title: "Landing Page",
    description: "A landing page website built with Next.js and Tailwind CSS, Framer, Shadcn.",
    liveLink: "https://landing-page-olive-five-59.vercel.app/",
    sourceLink: "https://github.com/bibekkd/landing-page",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion"]
  },
  {
    title: "Landing Page",
    description: "A landing page website built with Next.js and Tailwind CSS, Framer, Shadcn.",
    liveLink: "https://connectly-v1.vercel.app/",
    sourceLink: "https://github.com/bibekkd/connectly-v1",
    techStack: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion"]
  },
  // {
  //   title: "Document Summary Assistant App",
  //   description: "A smart application that allows users to upload PDF or image files and generates concise, smart summaries of their content.",
  //   liveLink: "https://ai-smart-summary.streamlit.app/",
  //   sourceLink: "https://github.com/bibekkd/summary-app",
  //   techStack: ["Streamlit", "Python", "Tailwind CSS", "shadcn/ui", "Framer Motion"]
  // },
  {
    title: "Game And Grade Analysis Project",
    description: "An interactive Data visualization dashboard that allows users to explore and analyze data through interactive charts and graphs.",
    liveLink: "https://my-project-602050-eyh7t8yg.preswald.app/",
    sourceLink: "https://github.com/bibekkd/preswald_intern_project",
    techStack: ["Python", "Preswald", "Pandas", "Numpy", "Plotly"]
  },
];

const Projects = () => {
  return (
    <section className='flex w-auto flex-col items-center justify-center overflow-hidden rounded-md bg-background'>
            <h1 className='text-5xl md:text-6xl font-extrabold text-white my-15'>
                Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-5 rounded-lg p-5 mx-20 mb-10'>
              {ProjectData.map((project, index) => (
                <div key={index} className='my-5 mx-3 rounded-lg'>
                  <ProjectCard key={index} project={project} />
                </div>
              ))}
            </div>
    </section>
  )
}

export default Projects