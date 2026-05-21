import { motion } from "framer-motion"
import { slideUp, staggerChildren } from "@/utils/motion-utils"
import { Linkedin } from "lucide-react"

function ExperienceSection() {
  const experiences = [
    {
      company: "Zenskar",
      logo: "/zenskar-logo.jpeg",
      linkedinUrl: "https://www.linkedin.com/company/zenskar",
      period: "May 2025 - Present",
      role: "Backend Engineering Intern",
      responsibilities: [
        "Optimized exception handling for SQS/SNS job schedulers, resolved validation issues across 20+ service endpoints, and extended backend architecture to capture anomalies across 8+ microservices with dependency injection patterns.",
        "Designed full-stack anomalies detection system with 2,000+ lines of scalable code using atomic design principles, achieving 95% test coverage with Cypress and Vitest."
      ]
    },
    {
      company: "Vdev Inc.",
      logo: "/vdev-logo.jpeg", // Replace with actual logo URL in production
      linkedinUrl: "https://www.linkedin.com/company/vdevinc/",
      period: "Jan 2024 - Present",
      role: "Full Stack Developer",
      responsibilities: [
        " Implemented Twilio API authentication and REST APIs with ExpressJS, reducing authentication costs by 80%. Integrated AWS Lambda Function in the backend for server-side video rendering with Remotion.",
        "Developed React Native CLI app with authentication flow, navigation, and 5+ pixel-perfect UI screens, serving 1,000+ users with 99% crash-free sessions.",
        "Created 20+ reusable React UI components and custom hooks for the frontend in TypeScript, along with Google Analytics for user behaviour tracking and performance monitoring."
      ]
    },
    {
      company: "Unibuzz Networks Pvt. Ltd.",
      logo: "/unibuzz-logo.jpeg", // Replace with actual logo URL in production
      linkedinUrl: "https://www.linkedin.com/company/unibuzznetworks/",
      period: "Sep 2023 - Oct 2024",
      role: "Software Engineer Intern",
      responsibilities: [
        " Crafted 10+ pixel-perfect UI screens and transformed the NextJS web application into a Progressive Web Application, while leveraging React Hook Form and Zustand for form and state management.",
        " Improved the development workflow by establishing CI/CD pipelines with GitHub Actions, along with comprehensive Jest unit tests achieving 80% code coverage, and Storybook for visual testing.",
        "Migrated 10,000+ lines of code to TypeScript and integrated a GraphQL endpoint along with MongoDB for improved data operations."
      ]
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="experience"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Ambient background glow blurs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase block mb-2">[ 04 // EXPERIENCE ]</span>
          <motion.h2 
            variants={slideUp} 
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>
        </div>
        <motion.div variants={staggerChildren} className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={slideUp} 
              className="mb-12 flex group"
            >
              <div className="flex flex-col items-center mr-8">
                <div className="w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-indigo-100/50 dark:ring-indigo-950/50 transition-all duration-300 group-hover:ring-8"></div>
                <div className="w-0.5 h-full bg-indigo-100 dark:bg-indigo-950/50"></div>
              </div>
              <div className="bg-white/40 dark:bg-gray-950/40 backdrop-blur-md p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex-grow border border-neutral-200/50 dark:border-neutral-800/50 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)]">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 rounded-full object-cover bg-gray-100 dark:bg-gray-750"
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <a 
                      href={exp.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={`Visit ${exp.company} LinkedIn page`}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-indigo-50/60 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/30 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="font-medium mb-4 text-indigo-600 dark:text-indigo-300">
                  {exp.role}
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-300 dark:bg-indigo-500"></span>
                      <span className="text-sm leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ExperienceSection