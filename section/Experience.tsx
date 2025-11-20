import EduCard from '@/components/EduCard'
import React from 'react'
import WorkImage from '@/public/work.png'
import BioPassImage from '@/public/biopass_logo.png'
import BuildMVPImage from '@/public/logo.png'
import DiligenAI from "@/public/diligence_ai.png"

const ExperienceData = [
    {
        index: 0,
        title: 'Full Stack Developer',
        description: 'Full Stack Developer at Diligence AI, worked in fully functional production level web application',
        image: DiligenAI,
        instituteLink: 'https://diligenceai.dev/',
        starting: 'August 2025',
        ending: 'October 2025'
    },
    {
        index: 1,
        title: 'React Native Developer Intern',
        description: 'React Native Developer at BioPass, worked in creating a mobile app for BioPass',
        image: BioPassImage,
        instituteLink: 'https://biopass.fit/',
        starting: 'October 2025',
        ending: 'Present'
    },
    {
        index: 2,
        title: 'React Native Developer Intern',
        description: 'React Native Developer at BuildMVP, worked in creating a mobile app for BuildMVP',
        image: BuildMVPImage,
        instituteLink: 'https://buildmvpfa.st/',
        starting: 'June 2025',
        ending: 'August 2025'
    },
    {
        index: 3,
        title: 'Full Stack Developer',
        description: 'Full Stack Freelance Developer, worked in different Production level app design to production',
        image: WorkImage,
        instituteLink: '',
        starting: '2024',
        ending: '2025'
    }
]

const Experience = () => {
    return (
        <section className='flex w-auto flex-col items-center justify-center overflow-hidden rounded-md bg-background my-10'>
            <h1 className='text-5xl md:text-6xl font-extrabold text-foreground my-15'>
                Experience
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-15 w-full max-w-7xl px-4'>
                {ExperienceData.map((edu, index) => (
                    <div key={index} className='transform transition-transform hover:scale-[1.02] duration-300'>
                        <EduCard
                            title={edu.title}
                            description={edu.description}
                            image={edu.image}
                            instituteLink={edu.instituteLink}
                            starting={edu.starting}
                            ending={edu.ending}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience