'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Fatima Arshad',
      designation: 'Full Stack Developer',
      image:
        'https://avatars.githubusercontent.com/u/75124780?v=4',
      
    },
    {
      id: 2,
      name: 'AaMna AnSari',
      designation: 'Software Engineer',
      image:
        'https://avatars.githubusercontent.com/u/123650396?v=4',
    },
    {
      id: 3,
      name: 'Fatima Arshad',
      designation: 'Full Stack Developer',
      image:
        'https://avatars.githubusercontent.com/u/75124780?v=4',
    },
    {
      id: 4,
      name: 'AaMna AnSari',
      designation: 'Software Engineer',
      image:
        'https://avatars.githubusercontent.com/u/123650396?v=4',},
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your Web Development journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors}/>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors