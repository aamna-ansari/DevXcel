import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative z-10 w-full text-center'>
        <h1
            className="text-4xl md:text-7xl text-red-400 mt-5"
            >Master the art of music</h1>
        </div>
    </div>
  )
}
