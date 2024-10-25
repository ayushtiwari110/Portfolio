"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { fadeIn, slideUp, staggerChildren } from "@/utils/motion-utils"

function ProjectCard({ title, description, image, liveLink, techStack }: {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  techStack: string[];
}) {
  return (
    <motion.div variants={slideUp} whileHover={{ y: -5 }} className="h-full">
      <Card className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <CardContent className="p-6 flex-1">
          <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`${title} thumbnail`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {techStack && techStack.map((tech) => (
                <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 dark:bg-gray-800 p-6 mt-auto">
          <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              Live Preview
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Chat io",
      description: "Tired of conversations that fade faster than a dial tone? Chat.io - Where connections spark, and stories unfold",
      image: "/chatio.png?height=200&width=400",
      liveLink: "https://www.chat-io.tech",
      techStack: ["Next.js", "Typescript", "Zustand", "Shadcn", "Tailwind CSS", "Zod", "Convex", "Clerk", "Supabase", "Pusher", "LiveKit", "Gemini", "Vercel"]
    },
    {
      title: "Meet io",
      description: "Wanna meet new people? Meet.io - Where connections spark, and stories unfold",
      image: "/meetio.png?height=200&width=400",
      liveLink: "https://meet-io-ashen.vercel.app",
      techStack: ["Next.js", "Typescript", "Shadcn", "GetStream", "Clerk", "Tailwind CSS", "Vercel"]
    },
    {
      title: "General Championship App",
      description: "A application to witness the inter-branch championship of IIT Bhubaneswar",
      image: "/gcapp.png?height=200&width=400",
      liveLink: "https://github.com/SamMathelete/GC-App",
      techStack: ["React Native", "Firebase", "Google Auth"]
    }
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      id="projects"
      className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.03] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          My Projects
        </motion.h2>
        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}