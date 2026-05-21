"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { fadeIn, slideUp, staggerChildren } from "@/utils/motion-utils"

function ProjectCard({ title, description, image, liveLink, techStack, linkText }: {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  techStack: string[];
  linkText?: string;
}) {

  const isRealLink = !liveLink.includes("null");
  const LinkButtonText = linkText ?? (isRealLink ? "Live Preview" : liveLink.split("-")[1]);
  const Wrapper = isRealLink ? "a" : "div";

  // Get background color based on project type
  const getProjectBg = (title: string) => {
    if (title.includes("Orchestrate") || title.includes("Triage") || title.includes("Agent")) return "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20";
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
      <Card className="w-full h-full overflow-hidden bg-white/40 dark:bg-gray-950/40 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
        <CardContent className="p-6 flex-1">
          <div className={`relative w-full h-48 mb-6 rounded-lg overflow-hidden ${getProjectBg(title)} flex items-center justify-center bg-opacity-40`}>
            <Image
              src={image}
              alt={`${title} thumbnail`}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-500 hover:scale-105 p-2"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {techStack && techStack.map((tech) => (
                <span key={tech} className="text-xs bg-indigo-50/60 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/30 px-2.5 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-neutral-50/50 dark:bg-neutral-900/30 border-t border-neutral-200/30 dark:border-neutral-800/30 p-6 mt-auto">
          <Button asChild variant="outline" className="w-full border-indigo-200 dark:border-indigo-900/50 hover:bg-indigo-600 hover:text-white transition-all duration-300">
            <Wrapper href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              {LinkButtonText}
              {isRealLink && <ExternalLink className="w-4 h-4 ml-2" />}
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
      title: "HackerRank Orchestrate — Support Triage Agent",
      description: "Placed 50th out of 1,349 teams. A terminal-based multi-domain agentic AI pipeline that ingests customer tickets across HackerRank, Anthropic Claude, and Visa ecosystems — classifies, retrieves, grades, generates, and verifies grounded responses or escalates, all without outside knowledge. Implements Corrective RAG, Evaluator-Optimizer loops, and Prompt Chaining via a Chain-of-Responsibility pipeline.",
      image: "/h-o-system-design.png?height=200&width=400",
      liveLink: "https://github.com/ayushtiwari110/Hackerrank-Orchestrate-Hackathon",
      techStack: ["Agentic Pipeline", "Corrective RAG", "Evaluator-Optimizer", "Prompt Chaining", "Intent Routing", "Context Engineering", "Vector Retrieval", "Chain of Responsibility", "Python"]
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
      title: "Published Research: ML-Driven Materials Discovery",
      description: "Developed machine learning models using GNNs and Random Forest to predict thermoelectric material properties. Achieved 1.5-2x better accuracy than existing models, published in ACS Applied Energy Materials.",
      image: '/btp-project.png',
      liveLink: 'https://pubs.acs.org/doi/10.1021/acsaem.5c01456',
      linkText: 'Research Publication',
      techStack: ["Python", "Graph Neural Networks", "PyMatGen", "Scikit-learn", "Materials Project Database", "Data Pipeline"],
    },
    {
      title: "Vocal io",
      description: "Real-time messaging application with microservices architecture, integrating external services including Clerk webhooks, Convex for real-time data sync, and LiveKit for WebRTC video calls with AI assistance.",
      image: "/chatio.png?height=200&width=400",
      liveLink: "https://www.chat-io.tech",
      techStack: ["Next.js", "Typescript", "Clerk", "Convex", "Supabase", "LiveKit", "ShadCN", "Gemini", "WebRTC", "Microservices"]
    },
    {
      title: "General Championship App",
      description: "4.9-star rated mobile application for inter-branch championship management at IIT Bhubaneswar, serving 2900+ students with live scores and event calendar.",
      image: "/gcapp.png?height=200&width=400",
      liveLink: "https://github.com/SamMathelete/GC-App",
      techStack: ["React Native", "Firebase", "Google Auth", "UI/UX Design", "Figma", "TypeScript"]
    },
    {
      title: "Meet io",
      description: "Video conferencing solution with real-time communication features, enabling seamless virtual meetings and collaboration.",
      image: "/meetio.png?height=200&width=400",
      liveLink: "https://meet-io-ashen.vercel.app",
      techStack: ["Next.js", "Typescript", "Shadcn", "GetStream", "Clerk", "Tailwind CSS", "Vercel"]
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
      className="py-24 bg-slate-50/50 dark:bg-slate-950/50 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-gray-100/[0.01] bg-[size:20px_20px]" />
      {/* Ambient decorative glow blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase block mb-2">[ 03 // WORK ]</span>
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            My Projects
          </motion.h2>
        </div>
        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}