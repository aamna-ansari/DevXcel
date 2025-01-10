"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Enrolling in this web development school was the best decision I made. The instructors are supportive, and the projects helped me build a strong portfolio.",
    name: "Alex Williams",
    title: "Full-Stack Development Student",
  },
  {
    quote:
      "I started as a complete beginner, and now I can build fully responsive websites! The step-by-step guidance was amazing.",
    name: "Sarah Lee",
    title: "Front-End Development Student",
  },
  {
    quote:
      "The backend courses were a game-changer for me. The hands-on projects and real-world examples helped me land my first developer job!",
    name: "Michael Brown",
    title: "Backend Development Student",
  },
  {
    quote:
      "This school is perfect for learning modern frameworks like React and Vue. The instructors are industry experts who provide invaluable insights.",
    name: "Emily Carter",
    title: "JavaScript Frameworks Student",
  },
  {
    quote:
      "The course on APIs and web security was incredibly detailed. I feel confident designing and securing robust web applications now.",
    name: "Chris Johnson",
    title: "Advanced Web Development Student",
  },
  ];

const TestimonialCards = () => {
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 dark:text-white">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards