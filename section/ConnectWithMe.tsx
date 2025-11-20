import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { LiquidButton } from '@/components/ui/liquid-glass-button'

const ConnectWithMe = () => {
    return (
        <div className='relative w-full flex flex-row items-center justify-between py-8 px-6 border-t border-border bg-background/50 backdrop-blur-sm'>
            <FlickeringGrid
                className="absolute inset-0 size-full pointer-events-none opacity-30"
                squareSize={4}
                gridGap={6}
                color="#D946EF"
                maxOpacity={0.5}
                flickerChance={0.1}
            />
            <div className='relative z-10'>
                <a href="mailto:deybibek58@gmail.com" aria-label="Email me">
                    <LiquidButton className="shadow-lg shadow-primary/20">
                        <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-muted-foreground lg:text-lg">
                            Email me
                        </span>
                    </LiquidButton>
                </a>
            </div>

            <div className='flex flex-col gap-2 items-center justify-end'>
                <div className='relative z-10'>
                    <Link href="https://drive.google.com/file/d/1QzXGXU1KVi04dD5nx6xYxd8ZcyHpbevI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <LiquidButton className="shadow-lg shadow-primary/20">
                            <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-muted-foreground lg:text-lg">
                                Resume
                            </span>
                        </LiquidButton>
                    </Link>
                </div>
                <div className='relative z-10 flex flex-row items-center space-x-6'>
                    <Link href={'https://github.com/bibekkd'} className='hover:opacity-80 transition-opacity hover:scale-110 transform duration-200'>
                        <Github className="h-6 w-6 text-foreground hover:text-primary shadow-[0px_0px_70px] shadow-primary/50" />
                    </Link>
                    <Link href={'https://x.com/Bibekkdeytwts'} className='hover:opacity-80 transition-opacity hover:scale-110 transform duration-200'>
                        <Twitter className="h-6 w-6 text-foreground hover:text-primary shadow-[0px_0px_70px] shadow-primary/50" />
                    </Link>
                    <Link href={'https://x.com/Bibekkdeytwts'} className='hover:opacity-80 transition-opacity hover:scale-110 transform duration-200'>
                        <Linkedin className="h-6 w-6 text-foreground hover:text-primary shadow-[0px_0px_70px] shadow-primary/50" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ConnectWithMe