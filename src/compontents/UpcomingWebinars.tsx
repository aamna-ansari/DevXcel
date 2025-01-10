'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
  {
    title: "Introduction to Web Development",
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript, in this beginner-friendly webinar.",
    slug: "introduction-to-web-development",
    isFeatured: true,
  },
  {
    title: "Mastering JavaScript Frameworks",
    description:
      "Explore popular JavaScript frameworks like React, Vue, and Angular to build modern web applications.",
    slug: "mastering-javascript-frameworks",
    isFeatured: true,
  },
  {
    title: "Building APIs with Node.js",
    description:
      "Get hands-on experience in creating robust and scalable APIs using Node.js and Express.",
    slug: "building-apis-with-nodejs",
    isFeatured: true,
  },
  {
    title: "UI/UX Design for Developers",
    description:
      "Enhance your design skills and learn how to create user-friendly and visually appealing web interfaces.",
    slug: "ui-ux-design-for-developers",
    isFeatured: true,
  },
  {
    title: "Web Application Security Essentials",
    description:
      "Understand the fundamentals of securing web applications against modern threats.",
    slug: "web-application-security-essentials",
    isFeatured: true,
  },
  {
    title: "Optimizing Web Performance",
    description:
      "Learn techniques to improve website speed and performance for better user experiences.",
    slug: "optimizing-web-performance",
    isFeatured: true,
  },
  ];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Web Development Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars