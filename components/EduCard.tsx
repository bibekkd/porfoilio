import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MagicCard } from './magicui/magic-card'

interface EduCardProps {
    title: string
    description: string
    image: string | any
    starting: string
    ending: string
    instituteLink: string
}

const EduCard = ({title, description, image, starting, ending, instituteLink}: EduCardProps) => {
    return (
        <MagicCard
            gradientColor={"#ce8de0" }
            className="p-0 rounded-lg"
        >
            <Link href={instituteLink} className="flex gap-4 max-w-2xl p-4 bg-white border border-muted-forground rounded-lg shadow hover:bg-background/30 dark:bg-black/40 dark:border-white/40 dark:hover:bg-background/60 shadow-[0px_0px_70px] shadow-white/10">
                {image && (
                    <div className="flex-shrink-0">
                        <Image src={image} alt={title} className="w-20 h-20 object-cover rounded-lg"/>
                    </div>
                )}
                <div className="flex flex-col justify-between">
                    <div>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
                            {description}
                        </p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        <span>{starting} - {ending}</span>
                    </div>
                </div>
            </Link>
        </MagicCard>
    )
}

export default EduCard