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

  const LinkButtonText = !liveLink.includes("null") ? "Live Preview" : liveLink.split("-")[1];
  const Wrapper = !liveLink.includes("null") ? "a" : "div";

  // Get background color based on project type
  const getProjectBg = (title: string) => {
    if (title.includes("Vocal") || title.includes("Chat") || title.includes("Meet")) return "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20";
    if (title.includes("Sync") || title.includes("Customer")) return "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20";
    if (title.includes("Observability") || title.includes("Atlan")) return "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20";
    if (title.includes("Championship") || title.includes("App")) return "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20";
    if (title.includes("Materials") || title.includes("ML")) return "bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20";
    if (title.includes("Smart") || title.includes("Naka")) return "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20";
    return "bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20";
  };

  return (
    <motion.div variants={slideUp} whileHover={{ y: -5 }} className="h-full">
      <Card className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <CardContent className="p-6 flex-1">
          <div className={`relative w-full h-48 mb-6 rounded-lg overflow-hidden ${getProjectBg(title)} flex items-center justify-center`}>
            <Image
              src={image}
              alt={`${title} thumbnail`}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 hover:scale-105 p-2"
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
            <Wrapper href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              {LinkButtonText}
              {LinkButtonText === "Live Preview" && <ExternalLink className="w-4 h-4 ml-2" />}
            </Wrapper>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Vocal io",
      description: "Real-time messaging application with microservices architecture, integrating external services including Clerk webhooks, Convex for real-time data sync, and LiveKit for WebRTC video calls with AI assistance.",
      image: "/chatio.png?height=200&width=400",
      liveLink: "https://www.chat-io.tech",
      techStack: ["Next.js", "Typescript", "Clerk", "Convex", "Supabase", "LiveKit", "ShadCN", "Gemini", "WebRTC", "Microservices"]
    },
    {
      title: "Customer Sync Hub",
      description: "Event-driven microservices system for bidirectional customer synchronization between local database and external services using Kafka message queues with real-time metrics visualization.",
      image: "/zenskar-project.png?height=200&width=400",
      liveLink: "https://github.com/ayushtiwari110/Two-way-Integration",
      techStack: ["Python", "FastAPI", "Kafka", "Stripe API", "SQLAlchemy", "JavaScript", "Bootstrap", "Docker", "Chart.js", "Webhooks"]
    },
    {
      title: "Atlan Observability Challenge",
      description: "Comprehensive observability solution with multi-dimensional monitoring, achieving 71% performance improvement through optimized API implementations and business impact visualization.",
      image: "/atlan-project.png?height=200&width=400", 
      liveLink: "https://github.com/ayushtiwari110/My-Rasogolla-LGTM",
      techStack: ["Next.js", "MongoDB", "Prometheus", "Grafana", "Loki", "Zipkin", "OpenTelemetry", "Docker", "Load Testing"]
    },
    {
      title: "Meet io",
      description: "Video conferencing solution with real-time communication features, enabling seamless virtual meetings and collaboration.",
      image: "/meetio.png?height=200&width=400",
      liveLink: "https://meet-io-ashen.vercel.app",
      techStack: ["Next.js", "Typescript", "Shadcn", "GetStream", "Clerk", "Tailwind CSS", "Vercel"]
    },
    {
      title: "General Championship App",
      description: "4.9-star rated mobile application for inter-branch championship management at IIT Bhubaneswar, serving 2900+ students with live scores and event calendar.",
      image: "/gcapp.png?height=200&width=400",
      liveLink: "https://github.com/SamMathelete/GC-App",
      techStack: ["React Native", "Firebase", "Google Auth", "UI/UX Design", "Figma", "TypeScript"]
    },
    {
      title: "Materials Property Prediction by ML",
      description: "Machine learning pipeline for predicting thermoelectric material properties using Graph Neural Networks and Random Forest models on 70k+ crystal structures.",
      image: '/btp-project.png',
      liveLink: 'null-Manuscript in Preparation',
      techStack: ["Python", "Graph Neural Networks", "PyMatGen", "Scikit-learn", "Materials Project Database", "Data Pipeline"],
    },
    {
      title: "Smart Naka",
      description: "Mobile application for real-time vehicle theft verification against central database, developed for Ethos Hackathon at IIT Guwahati.",
      image: '/ethos-project.png',
      liveLink: 'https://github.com/hv789/smart-naka',
      techStack: ["React Native", "Figma", "TypeScript", "Real-time Database"],
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