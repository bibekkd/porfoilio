import EduCard from '@/components/EduCard'
import React from 'react'
import HbtuImage from '@/public/hbtu-logo-1.jpg'
import Image100xdevs from '@/public/100xdevs_logo.jpeg'

const Education = () => {
    return (
        <section className='flex w-auto flex-col items-center justify-center overflow-hidden rounded-md bg-background my-10'>
            <h1 className='text-5xl md:text-6xl font-extrabold text-white my-15'>
                Education
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-10 mb-15 w-full max-w-7xl px-4'>
                <EduCard 
                    title={'Harcourt Butler Technical University'}
                    description={'B.Tech in Information Technology'}
                    image={HbtuImage}
                    instituteLink={'https://hbtu.ac.in/'}
                    starting={'2022'}
                    ending={'2026'}
                />
                <EduCard 
                    title={'100xdevs'}
                    description={'Full Stack Web Development, DevOps, Web3 Cohort'}
                    image={Image100xdevs}
                    instituteLink={'https://100xdevs.com/'}
                    starting={'2023'}
                    ending={'2024'}
                />
            </div>
        </section>
    )
}

export default Education