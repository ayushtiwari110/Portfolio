import { motion } from "framer-motion"
import { staggerChildren } from "@/utils/motion-utils"
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
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">🎓 Academic Milestone</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Secured admission to IIT Bhubaneswar, marking the beginning of my formal Undergrad education</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💻 Technical Foundation</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Completed first Python project during my JEE Advanced Preparation: Tic-tac-toe game implementation</li>
                <li>Started Android Development journey through Google's Android Basics Nanodegree</li>
                <li>Strengthened programming fundamentals through Harvard's CS50 lectures</li>
              </ul>
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
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Year Highlight</h4>
            <p className="text-green-600 dark:text-green-400">
              Selected for IIT Bhubaneswar's Coding Society (Top 20 among 440 students batch)
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">🏆 Hackathons & Competitions</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Participated in Hacktoberfest 2022, entering the open-source community</li>
                <li>Achieved a Bronze Medal in Inter IIT Tech Meet 11.0</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💻 Technical Achievements</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Mastered Data Structures and Algorithms in C++</li>
                <li>Completed Android Basics Nanodegree, advancing to Kotlin and Jetpack</li>
                <li>Explored blockchain fundamentals through Solana DevTour</li>
                <li>Switched to Web Development, started learning React</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">👥 Leadership & Community</h4>
              <div className="space-y-4">
                <p className="text-neutral-700 dark:text-neutral-300">
                  Led frontend development of two for the General Championship App, managing UI/UX design with Figma and implementation with React Native. Handled Firebase integration and team coordination as Frontend Lead.
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

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💼 Professional Growth</h4>
              <p className="text-neutral-700 dark:text-neutral-300">
                At Unibuzz, gained hands-on experience with enterprise-grade development practices and tools:
              </p>
              <ul className="mt-2 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Implemented comprehensive CI/CD pipelines using GitHub Actions</li>
                <li>• Developed and maintained GraphQL APIs with robust schema validation</li>
                <li>• Created serverless functions using AWS Lambda</li>
                <li>• Established unit testing protocols with Jest and React Testing Library</li>
                <li>• Worked with AWS lambda functions for deploying chatbots</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">🏆 Hackathons & Competitions</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Participated in and reached finals of Ethos Hackathon at IIT Guwahati</li>
                <li>Selected as a contributor for GirlScript Summer of Code</li>
                <li>Achieved 3rd position in the SDE Hackathon at IIT Bhubaneswar</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💻 Technical Achievements</h4>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                Deepened expertise in modern web development, focusing on the MERN stack while embracing industry best practices and advanced architectural patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Next.js', 'Unit Testing', 'CI/CD Pipelines'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">👥 Leadership & Community</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Mentored junior developers in modern web development practices as Governor of Web and Design Society</li>
              </ul>
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

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💼 Professional Growth</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-green-600 dark:text-green-400 font-medium mb-2">Freelance Development at Vdev Solutions</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Led development of authentication systems and core features, contributing to web and mobile applications.
                  </p>
                </div>

                <div>
                  <h5 className="text-green-600 dark:text-green-400 font-medium mb-2">Campus Internship Recruitment Performance</h5>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                    <li>MediaNet: Shortlisted among top 9 students out of 200 for final interview rounds</li>
                    <li>I'mBesideYou (Tokyo-based startup): Advanced to final HR round as one of 3 students from campus</li>
                    <li>Atlan: Progressed through multiple off-campus rounds, completed DevOps observability assignment</li>
                    <li>Multiple companies: Demonstrated consistent performance in competitive recruitment process</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-green-600 dark:text-green-400 font-medium mb-2">Open Source Contributions</h5>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                    <li>Contributed to JSON Schema's CI/CD architecture</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💻 Technical Achievements</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">B.Tech Project: ML for Material Science</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Implementing advanced machine learning architectures (CGCNN and MEGNet) for predicting thermoelectric material properties, focusing on computational efficiency and accuracy.
                  </p>
                </div>

                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">MedTech Innovation</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Developing a novel ML-based screening system for orthodontic residue detection using staining dyes, combining computer vision with medical diagnostics.
                  </p>
                </div>

                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">AI Development</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Explored generative AI applications through LangChain.js, building practical implementations and understanding large language model integrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">🏆 Competitions & Recognition</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Graph Contest by AlgoUniversity: All India Rank 170 out of 800+ students, Campus Rank 13 out of 150+ students</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">👥 Leadership & Community</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Mentored General Championship 2024 App development team</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2025",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Career Milestone</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Successfully secured Backend Engineering Internship at Zenskar through competitive off-campus recruitment, marking transition to product-based company experience.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💼 Professional Growth</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-green-600 dark:text-green-400 font-medium mb-2">Zenskar - Backend Engineering Intern</h5>
                  <div className="mt-3">
                    <img
                      src="/zenskar-modal.svg"
                      alt="Zenskar"
                      className="rounded-lg w-full object-cover  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    />
                  </div><br/>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Successfully navigated competitive 4-round interview process covering DSA, system design, take-home project implementation, and cultural fit assessment.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Currently optimizing exception handling for SQS/SNS job schedulers, resolving validation issues across 20+ service endpoints, and designing full-stack anomalies detection system with 2,000+ lines of scalable code achieving 95% test coverage.
                  </p>
                  
                </div>

              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">🏆 Competitions & Achievements</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>IICPC Prelims 2025: All India Rank 1114 among 45,000+ participants (January)</li>
                <li>Code Cluster Campus Competition: 3rd position among all interdisciplines at IIT Bhubaneswar. <br/>Developed winning algorithm for 6-hour Pokemon game engine competition with complex scenario variables</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">💻 Technical Achievements</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">DevOps & Observability Stack</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Built comprehensive observability project for Atlan assignment, gaining expertise in modern monitoring infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Grafana', 'Prometheus', 'Zipkin', 'OpenTelemetry', 'DevOps', 'Monitoring'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-2">Advanced Software Architecture</h5>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Implemented enterprise-grade patterns in production-level projects during interview processes.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Dependency Injection', 'Factory Pattern', 'Apache Kafka', 'Data Integrity', 'System Design'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">📚 Research & Publications</h4>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Material Science ML Project: Successfully converted B.Tech project into research paper (currently under review)</li>
                <li>MedTech Innovation: Completed ML-based orthodontic residue detection system using computer vision</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-5 rounded-lg">
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Present Focus</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">Education</p>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">IIT Bhubaneswar, Final Year</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Expected Graduation: 2026</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">Current Role</p>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">Backend Engineering Intern</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Zenskar</p>
                </div>
              </div>
              
              <div className="border-t border-neutral-200/50 dark:border-neutral-700/50 pt-3">
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">Seeking Opportunities</p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Actively looking for full-time <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm font-medium">SDE</span> and <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded text-sm font-medium">AI-related</span> roles. 
                  Open to opportunities in product-based companies and innovative startups.
                </p>
              </div>
            </div>
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
      id="my-journey"
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