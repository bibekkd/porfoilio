import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
const ConnectWithMe = () => {
  return (
    <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
    >
    <footer className='w-full flex flex-row items-center justify-between bg-background py-8 px-6 border-t border-gray-800'>
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border bg-background">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />
    </div>
        <div className=''>
            <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-muted-foreground lg:text-lg">
                    Connect with me
                </span>
            </ShimmerButton>
        </div>
        <div className='flex flex-row items-center space-x-6'>
            <Link href={'https://github.com/bibekkd'} className='hover:opacity-80 transition-opacity'>
                <Github className="h-6 w-6 text-white"/>
            </Link>
            <Link href={'https://x.com/Bibekkdeytwts'} className='hover:opacity-80 transition-opacity'>
                <Twitter className="h-6 w-6 text-white"/>
            </Link>
            <Link href={'https://x.com/Bibekkdeytwts'} className='hover:opacity-80 transition-opacity'>
                <Linkedin className="h-6 w-6 text-white"/>
            </Link>
        </div>
    </footer>
    </FlickeringGrid>
  )
}

export default ConnectWithMe