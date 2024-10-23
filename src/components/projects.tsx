import { motion } from "framer-motion"
import Image from "next/image"
import { slideUp, staggerChildren } from "@/utils/motion-utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

function ProjectCard({ title, description, image, liveLink, techStack }: {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  techStack: string[];
}) {
  return (
    <motion.div variants={slideUp}>
      <Card className="w-full max-w-sm">
        <CardContent className="p-4">
          <Image
            src={image}
            alt={`${title} thumbnail`}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack && techStack.map((tech) => (
              <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
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

function ProjectsSection() {
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
      viewport={{ once: true }}
      variants={staggerChildren}
      id="projects"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={slideUp} className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">My Projects</motion.h2>
        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects && projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection