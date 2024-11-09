import React from 'react'

import { SparklesCore } from "@/components/ui/sparkles";
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';
const page = () => {
  return (

  
    

    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <p className='md:text-xl text-lg'>Presented By</p>
      <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
        TechCanva
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        <div className='text-center mt-5'>

        <Link href={'https://techcanva.in'} target='_blank' ><Button className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>www.techcanva.in</Button></Link>
        </div>
      </div>
      
    </div>






  

  
  
  )
}

export default page
