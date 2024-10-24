import { motion } from "framer-motion"
import { slideUp, staggerChildren } from "@/utils/motion-utils"
import Image from "next/image";
import { Timeline } from "./ui/timeline";

function MyJourney() {
  
  const timelineData = [
    {
      title: "2021",
      content: (
        <div className="space-y-6">
          <img
            src="/iitbbs.png"
            alt="IIT Bhubaneswar Campus"
            className="rounded-lg w-full object-cover"
          />
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="space-y-4">
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                Embarked on my programming journey while preparing for JEE Advanced, laying the foundation of my software development career.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">Key Milestones</h4>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>Gained admission to IIT Bhubaneswar, marking the beginning of my formal CS education</li>
                  <li>Completed first Python project: Tic-tac-toe game implementation</li>
                  <li>Started Android Development journey through Google's Android Basics Nanodegree</li>
                  <li>Strengthened programming fundamentals through Harvard's CS50 lectures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="italic text-blue-700 dark:text-blue-300">
              "The journey of a thousand miles begins with a single step. My first step was writing 'Hello World' in Python."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2022",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Achievement Highlight</h4>
            <p className="text-green-600 dark:text-green-400">
              Selected for IIT Bhubaneswar's Coding Society (Top 20 among 440 students)
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">Technical Growth</h4>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Mastered Data Structures and Algorithms in C++</li>
              <li>Completed Android Basics Nanodegree, advancing to Kotlin and Jetpack</li>
              <li>Participated in Hacktoberfest 2022, entering the open-source community</li>
              <li>Achieved a Bronze Medal in Inter IIT Tech Meet 11.0</li>
              <li>Explored blockchain fundamentals through Solana DevTour</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Leadership Project</h4>
            <div className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                Led frontend development for the General Championship App, managing UI/UX design and implementation. Handled Firebase integration and team coordination as Frontend Lead.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/gcapp1.jpg"
                  alt="GC App UI/UX Design"
                  className="rounded-lg w-full object-cover max-w-36"
                />
                <img
                  src="/gcapp2.jpg"
                  alt="GC App Dashboard"
                  className="rounded-lg w-full object-cover max-w-[154px]"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Professional Breakthrough</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Secured Software Engineer Internship at Unibuzz, marking transition from academic to professional development
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Full-Stack Mastery</h4>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Deepened expertise in modern web development, focusing on the MERN stack while embracing industry best practices and advanced architectural patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Next.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Enterprise Development</h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                At Unibuzz, gained hands-on experience with enterprise-grade development practices and tools:
              </p>
              <ul className="mt-2 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Implemented comprehensive CI/CD pipelines using GitHub Actions</li>
                <li>• Developed and maintained GraphQL APIs with robust schema validation</li>
                <li>• Created serverless functions using AWS Lambda</li>
                <li>• Established unit testing protocols with Jest and React Testing Library</li>
                <li>• Worked with Docker containers for consistent development environments</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Community Engagement</h4>
              <div className="prose dark:prose-invert">
                <p>
                  Actively contributed to the developer community through multiple channels:
                </p>
                <ul className="list-disc pl-5">
                  <li>Selected as a contributor for GirlScript Summer of Code</li>
                  <li>Participated in and reached finals of ETHOS Hackathon at IIT Guwahati</li>
                  <li>Achieved 3rd position in the SDE Hackathon at IIT Bhubaneswar.</li>
                  <li>Mentored junior developers in modern web development practices</li>
                </ul>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic text-neutral-600 dark:text-neutral-400">
            A transformative year marked by the transition from academic projects to professional software development, laying the groundwork for enterprise-scale applications.
          </blockquote>
        </div>
      )
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Expanded into diverse roles while deepening technical expertise in emerging technologies.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Professional Growth</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">Freelance Development at Vdev Solutions</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Led development of authentication systems and core features, contributing to multiple web and mobile applications.
                  </p>
                </div>

                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">Technical Leadership & Open Source</h5>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                    <li>Mentored General Championship 2024 App development team</li>
                    <li>Contributed to JSON Schema's CI/CD architecture</li>
                    <li>Developed Meetio, a personal project focusing on modern web technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Research Initiatives</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-purple-600 dark:text-purple-400 font-medium mb-2">B.Tech Project: ML for Material Science</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Implementing advanced machine learning architectures (CGCNN and MEGNet) for predicting thermoelectric material properties, focusing on computational efficiency and accuracy.
                  </p>
                </div>

                <div>
                  <h5 className="text-purple-600 dark:text-purple-400 font-medium mb-2">MedTech Innovation</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Developing a novel ML-based screening system for orthodontic residue detection using staining dyes, combining computer vision with medical diagnostics.
                  </p>
                </div>

                <div>
                  <h5 className="text-purple-600 dark:text-purple-400 font-medium mb-2">AI Development</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Explored generative AI applications through LangChain.js, building practical implementations and understanding large language model integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Current Focus</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Pre-final year student actively seeking Summer 2025 SDE internship opportunities. Combining strong software development foundation with emerging technology expertise.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="experience"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="">
        {/* <motion.h2 variants={slideUp} className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">My Journey</motion.h2> */}
        <motion.div variants={staggerChildren} className="max-w-3xl mx-auto">
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MyJourney