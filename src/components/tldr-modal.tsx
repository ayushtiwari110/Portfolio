import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon, CodeForcesIcon, LeetCodeIcon } from "./ui/social-icons";  
import { 
  Briefcase, 
  Code, 
  Trophy, 
  GraduationCap, 
  MapPin, 
  Star,
  Users,
  Zap
} from "lucide-react";

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
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 300 } }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Enhanced data structure
  const personalInfo = {
    name: "Ayush Tiwari",
    title: "Backend Engineering Intern @ Zenskar",
    education: "B.Tech + M.Tech @ IIT Bhubaneswar",
    cgpa: "8.5/10.0",
    location: "Bhubaneswar, India",
    experience: "12+ months",
    quote: "Make your work so uniquely yours, it speaks before your name does."
  };

  // Key metrics for dashboard
  const metrics = [
    { label: "Experience", value: "18+", unit: "months", icon: Briefcase, color: "bg-blue-500" },
    { label: "Projects", value: "7+", unit: "major", icon: Code, color: "bg-emerald-500" },
    { label: "Achievements", value: "4+", unit: "awards", icon: Trophy, color: "bg-yellow-500" },
    { label: "Tech Stack", value: "25+", unit: "tools", icon: Zap, color: "bg-purple-500" }
  ];

  // Core skills categorized
  const skillCategories = [
    {
      category: "Languages",
      skills: ["TypeScript", "Python", "JavaScript", "Java", "C++"],
      color: "from-blue-400 to-blue-600"
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "React Native", "Tailwind CSS", "ShadCN"],
      color: "from-cyan-400 to-cyan-600"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "GraphQL", "Kafka"],
      color: "from-green-400 to-green-600"
    },
    {
      category: "AI/ML",
      skills: ["PyMatGen", "Langchain", "Machine Learning"],
      color: "from-purple-400 to-purple-600"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Prometheus", "Grafana", "OpenTelemetry", "Zipkin"],
      color: "from-orange-400 to-orange-600"
    },
    {
      category: "Database & APIs",
      skills: ["MongoDB", "Supabase", "SQLAlchemy", "Clerk", "Convex"],
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  // Featured projects with enhanced details
  const featuredProjects = [
    {
      name: "Vocal io",
      description: "Architected real-time messaging application with microservices architecture",
      tech: ["NextJS", "Clerk", "Convex", "Supabase", "LiveKit", "ShadCN", "Gemini"],
      status: "Live",
      impact: "5+ external services integration, WebRTC video calls, 99.9% uptime",
      date: "Sep 2024"
    },
    {
      name: "Customer Sync Hub", 
      description: "Real-time Integration Platform with event-driven microservices",
      tech: ["Python", "FastAPI", "Kafka", "Stripe API", "SQLAlchemy", "JavaScript", "Bootstrap", "Docker"],
      status: "Live",
      impact: "Bidirectional customer synchronization with automatic retry logic",
      date: "2024"
    },
    {
      name: "Atlan Observability Challenge",
      description: "Platform Engineering comprehensive observability solution",
      tech: ["Next.js", "MongoDB", "Prometheus", "Grafana", "Loki", "Zipkin", "OpenTelemetry", "Docker"],
      status: "Challenge",
      impact: "71% performance improvement, multi-dimensional monitoring",
      date: "2025"
    },
    {
      name: "Materials Property Prediction",
      description: "Graph Neural Networks for crystal structure property prediction",
      tech: ["Python", "Graph Neural Networks", "PyMatGen", "Scikit-learn"],
      status: "Research",
      impact: "70k+ crystal structures, automated workflow pipeline",
      date: "Jun 2024"
    },
    {
      name: "General Championship App",
      description: "4.9-star rated app with live scores and event management",
      tech: ["React Native", "TypeScript", "Firebase", "Figma"],
      status: "Live",
      impact: "2900+ students, 65% engagement improvement, 40% interaction reduction",
      date: "Mar 2023"
    }
  ];

  // Achievements with enhanced details
  const achievements = [
    {
      name: "IICPC Code Prelims 2025",
      position: "AIR 1114 (Top 2.5%)",
      category: "Competitive Programming",
      date: "2025",
      icon: "🏆"
    },
    {
      name: "Inter IIT Tech Meet 11.0",
      position: "Bronze Medal",
      category: "Inter-University",
      date: "2024",
      icon: "🥉"
    },
    {
      name: "Code Cluster Contest",
      position: "3rd Place",
      category: "Algorithmic Contest",
      date: "2025",
      icon: "🥉"
    },
    {
      name: "Ethos Hackathon IIT Guwahati",
      position: "Finalist",
      category: "Hackathon",
      date: "2023",
      icon: "🚀"
    }
  ];

  // Experience data
  const experiences = [
    {
      company: "Zenskar",
      role: "Backend Engineering Intern",
      period: "May 2025 - Present",
      type: "Current",
      highlights: ["Microservices optimization", "95% test coverage", "SQS/SNS schedulers"]
    },
    {
      company: "Vdev Inc.",
      role: "Full Stack Developer", 
      period: "Jan 2024 - Present",
      type: "Ongoing",
      highlights: ["React Native CLI app", "Twilio API integration", "AWS Lambda"]
    },
    {
      company: "Unibuzz Networks",
      role: "Software Engineer Intern",
      period: "Sep 2023 - Oct 2024",
      type: "Past",
      highlights: ["TypeScript migration", "CI/CD pipelines", "GraphQL endpoint"]
    }
  ];

  // Add this effect to disable background scrolling
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  interface MetricType {
    label: string;
    value: string;
    unit: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }

  const MetricCard = ({ metric, index }: { metric: MetricType, index: number }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1 }}
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-2 md:p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-2 md:gap-3">
        <div className={`p-1.5 md:p-2 rounded-lg ${metric.color}/20 flex-shrink-0`}>
          <metric.icon className={`w-4 h-4 md:w-5 md:h-5 ${metric.color.replace('bg-', 'text-')}`} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-1">
            <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white truncate">{metric.value}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{metric.unit}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{metric.label}</p>
        </div>
      </div>
    </motion.div>
  );

  interface SkillCategoryType {
    category: string;
    skills: string[];
    color: string;
  }

  const SkillCategory = ({ category, index }: { category: SkillCategoryType, index: number }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.15 }}
      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300"
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-3`}>
        <Code className="w-4 h-4" />
        {category.category}
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string, skillIndex: number) => (
          <span
            key={skillIndex}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-2 md:p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-white/95 via-white/90 to-gray-50/90 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-800/90 backdrop-blur-xl rounded-2xl w-full max-w-6xl shadow-2xl max-h-[95vh] relative flex flex-col border border-gray-200/50 dark:border-gray-700/50"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-indigo-500/5 animate-pulse rounded-2xl" />
            
            {/* Header Section - Fixed */}
            <div className="relative z-10 p-4 md:p-6 border-b border-gray-200/50 dark:border-gray-700/50 flex-shrink-0">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-6">
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  {/* Profile Image with Animated Border */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full p-[2px]">
                      <div className="bg-white dark:bg-gray-900 rounded-full p-1">
                        <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden">
                          <Image
                            src="/ayush-avatar.jpg"
                            alt="Ayush Tiwari"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="min-w-0 flex-1 pt-2">
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                        {personalInfo.name}
                      </span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mb-3">{personalInfo.title}</p>
                    <div className="flex flex-wrap gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 flex-shrink-0" />
                        <span>{personalInfo.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability Status Box */}
                <div className="flex-shrink-0 lg:max-w-xs">
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-indigo-500/10 border border-emerald-200/20 dark:border-emerald-700/20 p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-sky-400/5 animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">ACTIVELY SEEKING</span>
                      </div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                        Full-time SDE and AI-related roles. 
                  Open to opportunities in product-based companies and innovative startups.
                        <span className="block text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Expected graduation: May 2026
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links & Close Button */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                  <div className="flex gap-1 md:gap-2">
                    <a href="https://github.com/ayushtiwari110" target="_blank" rel="noopener noreferrer" 
                       className="p-1.5 md:p-2 bg-gray-100/80 dark:bg-gray-800/80 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <GitHubIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/tiwari-ayush" target="_blank" rel="noopener noreferrer"
                       className="p-1.5 md:p-2 bg-gray-100/80 dark:bg-gray-800/80 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <LinkedInIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a href="mailto:21mm02005@iitbbs.ac.in"
                       className="p-1.5 md:p-2 bg-gray-100/80 dark:bg-gray-800/80 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <MailIcon className="w-3 h-3 md:w-4 md:h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                  </div>
                  <button
                    className="p-1.5 md:p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    onClick={onClose}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Metrics Dashboard */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {metrics.map((metric, index) => (
                  <MetricCard key={metric.label} metric={metric} index={index} />
                ))}
              </div>
            </div>

            {/* Content Area - Scrollable */}
            <div className="relative z-10 flex-1 overflow-y-auto scrollbar-thin">
              <div className="p-4 md:p-6 pb-8">
              {/* Quote Section */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-xl p-4 mb-6 border-l-4 border-sky-400"
              >
                <blockquote className="text-gray-700 dark:text-gray-300 italic text-center">
                  "{personalInfo.quote}"
                </blockquote>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Left Column */}
                <div className="space-y-6">
                  
                  {/* Skills Section */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      Technical Skills
                    </h3>
                    <div className="grid gap-4">
                      {skillCategories.map((category, index) => (
                        <SkillCategory key={category.category} category={category} index={index} />
                      ))}
                    </div>
                  </motion.div>

                  {/* Projects Section */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-emerald-500" />
                      Featured Projects
                    </h3>
                    <div className="space-y-3">
                      {featuredProjects.map((project, index) => (
                        <div key={index} className="p-3 md:p-4 bg-gray-50/80 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white truncate">{project.name}</h4>
                              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1 ml-2 flex-shrink-0">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                project.status === 'Live' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                  : project.status === 'Research'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                              }`}>
                                {project.status}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">{project.date}</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">{project.impact}</p>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="px-2 py-0.5 bg-gray-300 dark:bg-gray-500 text-gray-600 dark:text-gray-400 rounded text-xs">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  
                  {/* Experience Section */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      Professional Experience
                    </h3>
                    <div className="space-y-4">
                      {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full ${
                                exp.type === 'Current' ? 'bg-green-500' : 
                                exp.type === 'Ongoing' ? 'bg-blue-500' : 'bg-gray-400'
                              }`} />
                              {index < experiences.length - 1 && (
                                <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2" />
                              )}
                            </div>
                            <div className="flex-1 pb-6">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-gray-900 dark:text-white">{exp.company}</h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.role}</p>
                                </div>
                                <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                                  {exp.period}
                                </span>
                              </div>
                              <ul className="space-y-1">
                                {exp.highlights.map((highlight, highlightIndex) => (
                                  <li key={highlightIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements Section */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h3>
                    <div className="grid gap-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50/80 dark:bg-gray-700/50 rounded-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md transition-shadow">
                          <span className="text-2xl">{achievement.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">{achievement.name}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.position}</p>
                            <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-0.5 rounded">
                              {achievement.category}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{achievement.date}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Competitive Programming */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-orange-500" />
                      Competitive Programming
                    </h3>
                    <div className="grid gap-3">
                      <div className="flex items-center gap-3 p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-200/50 dark:border-red-800/50">
                        <CodeForcesIcon className="w-6 h-6 text-red-500" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">CodeForces</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">ayushtiwari110 • Pupil</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-yellow-50/80 dark:bg-yellow-900/20 rounded-lg border border-yellow-200/50 dark:border-yellow-800/50">
                        <LeetCodeIcon className="w-6 h-6 text-yellow-500" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">LeetCode</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">ayushtiwari110 • 400+ solved</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

                {/* Footer */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.7 }}
                  className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    Open to collaboration and new opportunities
                  </p>
                  <a
                    href="mailto:21mm02005@iitbbs.ac.in"
                    className="px-3 md:px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white rounded-lg text-xs md:text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <MailIcon className="w-4 h-4" />
                    Get In Touch
                  </a>
                </motion.div>
                
                {/* Extra spacing to ensure content is scrollable */}
                <div className="h-4"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TldrModal;