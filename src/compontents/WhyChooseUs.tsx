"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Build Your Future with Us: A Journey in Web Development Mastery",
    description:
      "Start your journey into the world of web development with personalized guidance tailored to your goals. Our hands-on approach ensures you gain practical experience while mastering essential technologies. Together, we'll shape your path to success in the tech industry.",
  },
  {
    title: "Empower Your Skills with Modern Development Practices",
    description:
      "Learn cutting-edge web development practices from industry professionals. From beginner-friendly lessons to advanced concepts, our courses cater to every level, empowering you to create stunning and efficient web applications.",
  },
  {
    title: "Interactive Learning, Real-Time Feedback",
    description:
      "Immerse yourself in a learning environment where real-time feedback and interactive sessions drive your growth. Just like debugging in real projects, our approach ensures clarity and skill refinement at every step.",
  },
  {
    title: "Stay Ahead with Industry-Relevant Curriculum",
    description:
      "Our curriculum evolves with the tech industry to include the latest frameworks, tools, and methodologies. Whether it’s mastering React or exploring cloud integrations, our courses keep you at the forefront of innovation.",
  },
  {
    title: "Unlimited Resources, Infinite Possibilities",
    description:
      "With a vast library of tutorials, guides, and project ideas, your learning never stops. Our platform ensures continuous opportunities for skill enhancement, letting you push the boundaries of your development capabilities.",
  },
  {
    title: "Collaborative Learning Community",
    description:
      "Join a vibrant community of learners and professionals where collaboration and peer support drive success. Share insights, solve challenges, and grow together in a network designed for aspiring developers.",
  },
  ];

const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs