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

const EduCard = ({ title, description, image, starting, ending, instituteLink }: EduCardProps) => {
    return (
        <MagicCard
            gradientColor={"#D946EF"}
            className="p-0 rounded-lg"
        >
            <Link href={instituteLink} className="flex gap-4 max-w-2xl p-4 bg-card/40 border border-border rounded-lg shadow-lg hover:bg-card/60 backdrop-blur-sm transition-all duration-300 group">

                {image && (
                    <div className="flex-shrink-0">
                        <Image src={image} alt={title} className="w-20 h-20 object-cover rounded-lg border border-border/50" />
                    </div>
                )}
                <div className="flex flex-col justify-between">
                    <div>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {title}
                        </h5>
                        <p className="text-wrap font-normal text-muted-foreground mb-2 overflow-hidden min-h-[3rem] line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <div className="text-sm text-muted-foreground/80">
                        <span>{starting} - {ending}</span>
                    </div>
                </div>
            </Link>
        </MagicCard>
    )
}

export default EduCard