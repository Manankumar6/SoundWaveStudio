import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className='h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center  justify-center relative  overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'
        > Master The Art Of Music</h1>

<p className='max-w-[52rem] mx-auto'>
    Feel the rhythm, let the beats take over! Dive into an immersive musical experience where every note, every melody, and every beat connects you to something greater. Explore sounds that move you, set your spirit free, and keep you coming back for more!
</p>

      </div>
      <div><Link href={'/course'}>
        <Button className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>Explore Courses</Button>
      </Link></div>
    </div>
  )
}

export default HeroSection
