import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { LiquidButton } from '@/components/ui/liquid-glass-button'

const ConnectWithMe = () => {
    return (
        <div className='relative w-full flex flex-row items-center justify-between py-8 px-6 border-t border-gray-800'>
            <FlickeringGrid
                className="absolute inset-0 size-full pointer-events-none"
                squareSize={4}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />
            <div className='relative z-10'>
                <a href="mailto:deybibek58@gmail.com" aria-label="Email me">
                    <LiquidButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-muted-foreground lg:text-lg">
                            Email me
                        </span>
                    </LiquidButton>
                </a>
            </div>
            
            <div className='flex flex-col gap-2 items-center justify-end'>
            <div className='relative z-10'>
            <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-muted-foreground lg:text-lg">
                        Connect with me
                    </span>
                </ShimmerButton>
            </div>
            <div className='relative z-10 flex flex-row items-center space-x-6'>
                <Link href={'https://github.com/bibekkd'} className='hover:opacity-80 transition-opacity'>
                    <Github className="h-6 w-6 text-white shadow-[0px_0px_70px] shadow-white/10"/>
                </Link>
                <Link href={'https://x.com/Bibekkdeytwts'} className='hover:opacity-80 transition-opacity'>
                    <Twitter className="h-6 w-6 text-white shadow-[0px_0px_70px] shadow-white/10"/>
                </Link>
                <Link href={'https://x.com/Bibekkdeytwts'} className='hover:opacity-80 transition-opacity '>
                    <Linkedin className="h-6 w-6 text-white shadow-[0px_0px_70px] shadow-white/10"/>
                </Link>
            </div>
            </div>
            
        </div>
    )
}

export default ConnectWithMe