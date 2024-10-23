import { motion } from "framer-motion"
import { slideUp, staggerChildren } from "@/utils/motion-utils"

function ExperienceSection() {
  const experiences = [
    {
      company: "Vdev Inc.",
      period: "Jan 2024 - Present",
      role: "Full Stack Developer",
      responsibilities: [
        "Implemented Twilio API authentication and MVC-based RESTful APIs, increasing flexibility and reducing authentication costs by 80%. Integrated AWS Lambda for server-side video rendering with Remotion.",
        "Developed React Native CLI app with authentication flow, navigation, and 5+ pixel-perfect UI screens, serving 1,000+ users with 99% crash-free sessions.",
        "Created 20+ reusable UI components and custom hooks for the frontend, along with Google Analytics for comprehensive user behavior tracking and performance monitoring."
      ]
    },
    {
      company: "Unibuzz Networks Pvt. Ltd.",
      period: "Sept 2023 - Oct 2024",
      role: "Software Engineer Intern",
      responsibilities: [
        "Developed 10+ pixel-perfect UI screens and transformed the web application into a Progressive Web Application, while leveraging React Hook Form and Zustand for optimized form and state management.",
        "Optimized the development workflow by establishing CI/CD pipelines with GitHub Actions, along with comprehensive unit tests achieving 80% code coverage, and Storybook for visual testing.",
        "Migrated 10,000+ lines of code to TypeScript and developed a GraphQL endpoint integrated with MongoDB for improved data operations. Actively participated in key architectural decisions."
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
      className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={slideUp} className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">My Experience</motion.h2>
        <motion.div variants={staggerChildren} className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={slideUp} className="mb-8 flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="w-1 h-full bg-primary"></div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{exp.company}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{exp.period}</p>
                <p className="font-semibold mb-2 text-gray-700 dark:text-gray-200">{exp.role}</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
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