
import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight/> 
        <div className=' p-4 relative z-10 w-full text-center'>
        <h1 className="mt-20 md:mt-0 text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the Art of Web Development</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-[50rem] mx-auto"
            >Dive into our comprehensive web development courses and transform your coding journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your full potential as a developer. From front-end to back-end development, we provide the tools, techniques, and guidance to help you succeed in the digital world.</p>
        </div>
        <div className="mt-4 text-center">
            <Link href={'/courses'}>
            <Button borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore Courses</Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection