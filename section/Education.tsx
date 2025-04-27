import EduCard from '@/components/EduCard'
import React from 'react'
import HbtuImage from '@/public/hbtu-logo-1.jpg'
import Image100xdevs from '@/public/100xdevs_logo.jpeg'

const EduncationData = [
    {   
        index: 0,
        title: 'Harcourt Butler Technical University',
        description: 'Bechelor of Technology in Information Technology',
        image: HbtuImage,
        instituteLink: 'https://hbtu.ac.in/',
        starting: '2022',
        ending: '2026'
    },
    {   
        index: 1,
        title: '100xdevs',
        description: 'Full-Stack Web Development, DevOps, Web3 Cohort',
        image: Image100xdevs,
        instituteLink: 'https://100xdevs.com/',
        starting: '2023',
        ending: '2024'
    },
]

const Education = () => {
    return (
        <section className='flex w-auto flex-col items-center justify-center overflow-hidden rounded-md bg-background my-10'>
            <h1 className='text-5xl md:text-6xl font-extrabold text-white my-15'>
                Education
            </h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-15 w-full max-w-7xl px-4'>
                {EduncationData.map((edu, index) => (
                    <EduCard
                        key={index}
                        title={edu.title}
                        description={edu.description}
                        image={edu.image}
                        instituteLink={edu.instituteLink}
                        starting={edu.starting}
                        ending={edu.ending}
                    />
                ))}
            </div>
        </section>
    )
}

export default Education