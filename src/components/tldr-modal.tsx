import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon, CodeForcesIcon, LeetCodeIcon } from "./ui/social-icons";  

interface TldrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TldrModal = ({ isOpen, onClose }: TldrModalProps) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 500 } }
  };

  // Key skills from tech-stack.tsx
  const skills = [
    "React", "TypeScript", "Next.js", "Python",
    "Machine Learning", "GenAI", "Node.js", "Express.js",
    "MongoDB", "Tailwind CSS", "Docker", "AWS"
  ];

  // Projects from projects.tsx
  const projects = [
    "Chat io",
    "Meet io",
    "General Championship App",
    "Materials Property Prediction by ML",
    "Smart Naka",
    "Observability Platform"
  ];

  // Open Source Contributions from contact-card.tsx
  const openSourceContributions = [
    { project: "JSON Schema", description: "CI/CD architecture improvements" },
    { project: "h2o-wave", description: "UI component fixes" },
    { project: "Hacktoberfest 2022", description: "Open source contributor" }
  ];

  // Achievements from various files
  const achievements = [
    {
      name: "IICPC Code Prelims",
      position: "AIR 1114",
      date: "2025"
    },
    {
      name: "Code Cluster (Algorithmic Contest)",
      position: "3rd Place",
      date: "2025"
    },
    {
      name: "Ethos Hackathon IIT Guwahati",
      position: "Finalist",
      date: "2023"
    },
    {
      name: "GirlScript Summer of Code",
      position: "Contributor",
      date: "Summer 2023"
    },
    {
      name: "SDE Hackathon IIT Bhubaneswar",
      position: "3rd Place",
      date: "Winter 2022"
    },
  ];

  // Competitive programming profiles from contact-card.tsx
  const codingProfiles = [
    { platform: "CodeForces", handle: "ayushtiwari110", rating: "Pupil" },
    { platform: "LeetCode", handle: "ayushtiwari110", problems: "400+ solved" }
  ];

  // Experience from experience.tsx
  const experiences = [
    {
      company: "Vdev Inc.",
      role: "Full Stack Developer",
      period: "Jan 2024 - Present"
    },
    {
      company: "Unibuzz Networks",
      role: "Software Engineer Intern",
      period: "Sep 2023 - Oct 2024"
    }
  ];

  // Add this effect to disable background scrolling
  useEffect(() => {
    if (isOpen) {
      // Save the current overflow style
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Disable scrolling on the body
      document.body.style.overflow = 'hidden';
      
      // Clean up function to restore scrolling when modal closes
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]); // Re-run effect when isOpen changes

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          {/* Outer container with overflow-hidden to maintain rounded corners */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-3xl shadow-xl max-h-[85vh] relative mt-16 overflow-hidden"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Inner scrollable container with padding to prevent content from touching edges */}
            <div className="overflow-y-auto max-h-[85vh] p-6 pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
              {/* Header with close button */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                    Ayush Tiwari
                  </span>
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={onClose}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Social Links Row */}
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="https://github.com/ayushtiwari110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tiwari-ayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://twitter.com/ayush_tiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:21mm02005@iitbbs.ac.in"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Email"
                >
                  <MailIcon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </a>
              </div>

              {/* Two-column layout for top section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Bio Section */}
                <div className="flex items-start space-x-3 col-span-2">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/ayush-avatar.jpg"
                      alt="Ayush Tiwari"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Pre-final Year Student</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech + M.Tech @ IIT Bhubaneswar</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">CGPA: 8.5/10.0</p>
                  </div>
                </div>

                {/* Quote Card */}
                <blockquote className="border-l-4 border-sky-400 pl-3 py-1 italic text-sm text-gray-700 dark:text-gray-300 md:col-span-1">
                  "Make your work so uniquely yours, it speaks before your name does."
                </blockquote>
              </div>

              {/* Two column layout for content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div>
                  {/* Focus Areas */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 rounded-lg text-xs">
                        Generative AI
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-xs">
                        Machine Learning
                      </span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-xs">
                        Software Engineering
                      </span>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Projects</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {projects.map((project, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-xs"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Experience</h4>
                    <div className="space-y-2">
                      {experiences.map((exp, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-md border border-gray-100 dark:border-gray-800"
                        >
                          <div className="flex justify-between">
                            <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{exp.company}</p>
                            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-400">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{exp.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Achievements Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Achievements</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-start p-1.5 rounded-md border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          <div>
                            <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{achievement.name}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.position}</p>
                          </div>
                          <span className="text-xs bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-400 px-1.5 py-0.5 rounded">
                            {achievement.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Open Source Contributions */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Open Source Contributions</h4>
                    <div className="space-y-2">
                      {openSourceContributions.map((contribution, index) => (
                        <div
                          key={index}
                          className="p-1.5 rounded-md border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{contribution.project}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{contribution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competitive Programming Profiles */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Competitive Programming</h4>
                    <div className="space-y-2">
                      {codingProfiles.map((profile, index) => (
                        <div
                          key={index}
                          className="p-1.5 rounded-md border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          <div className="flex items-center space-x-2">
                            {profile.platform === 'CodeForces' ?
                              <CodeForcesIcon className="w-4 h-4 text-red-500" /> :
                              <LeetCodeIcon className="w-4 h-4 text-yellow-500" />
                            }
                            <div>
                              <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{profile.platform}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">
                                {profile.handle} • {profile.platform === 'CodeForces' ? profile.rating : profile.problems}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Compact */}
              <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Open to collaboration and opportunities
                </p>
                <a
                  href="mailto:21mm02005@iitbbs.ac.in"
                  className="px-3 py-1 bg-gradient-to-r from-sky-400 to-indigo-500 text-white rounded-md text-xs hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </a>
              </div>

              {/* Add some extra padding at the bottom to prevent content from being cut off */}
              <div className="h-4"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TldrModal;