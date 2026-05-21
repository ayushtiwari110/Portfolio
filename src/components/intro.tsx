import { motion } from "framer-motion";
import Image from "next/image";
import { staggerChildren, slideUp } from "@/utils/motion-utils";
import { useState, useEffect } from "react";
import TldrModal from "./tldr-modal";
import {
  DynamicIslandProvider,
  DynamicIsland,
  DynamicContainer,
  DynamicDescription,
  useDynamicIslandSize
} from "./ui/dynamic-island";
import { Code, Star, Target, Rocket, Award, TrendingUp, Brain } from "lucide-react";

function AchievementsDynamicIsland() {
  const { setSize } = useDynamicIslandSize();

  const [currentCycleIndex, setCurrentCycleIndex] = useState(0);

  // Auto-cycling effect
  useEffect(() => {
    const cycle = [
      "compactMedium",        // Current Role + Status
      "compact",              // Key Achievement  
      "compactLong",          // Tech Skills
      "compactMedium",        // Competition Stats
      "compact",              // Research Impact
      "compactLong"           // Available Status
    ] as const;

    const interval = setInterval(() => {
      setCurrentCycleIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cycle.length;
        return nextIndex;
      });
    }, 3000); // 3 seconds per state

    return () => clearInterval(interval);
  }, []);

  // Synchronize size with content changes
  useEffect(() => {
    const cycle = [
      "compactMedium",        // Current Role + Status
      "compact",              // Key Achievement  
      "compactLong",          // Tech Skills
      "compactMedium",        // Competition Stats
      "compact",              // Research Impact
      "compactLong"           // Available Status
    ] as const;

    setSize(cycle[currentCycleIndex]);
  }, [currentCycleIndex, setSize]);

  const renderContent = () => {
    switch (currentCycleIndex) {
      case 0: // compactMedium - Current Role + Status
        return (
          <DynamicContainer className="flex flex-col items-center justify-center h-full w-full px-4 py-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="relative">
                <Rocket className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              </div>
              <DynamicDescription className="text-sm font-medium text-neutral-100 dark:text-neutral-100">
                Upcoming SDE-1 @ Eternal
              </DynamicDescription>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full">Upcoming Role</span>
            </div>
          </DynamicContainer>
        );

      case 1: // compact - Key Achievement
        return (
          <DynamicContainer className="flex items-center justify-center h-full w-full px-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-yellow-400 flex-shrink-0 animate-pulse" />
              <DynamicDescription className="text-sm font-medium text-neutral-100 dark:text-neutral-100 truncate">
                <span className="text-yellow-300">Top 2.5%</span> IICPC 2025 Prelims
              </DynamicDescription>
            </div>
          </DynamicContainer>
        );

      case 2: // compactLong - Tech Skills
        return (
          <DynamicContainer className="flex items-center justify-center h-full w-full px-4">
            <div className="flex items-center gap-3">
              <Brain className="h-4 w-4 text-purple-400 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full">AI/ML</span>
                <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full">Full-Stack</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full">DevOps</span>
              </div>
            </div>
          </DynamicContainer>
        );

      case 3: // compactMedium - Competition Stats
        return (
          <DynamicContainer className="flex flex-col items-center justify-center h-full w-full px-4 py-2">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <DynamicDescription className="text-sm font-medium text-neutral-100 dark:text-neutral-100">
                Growing Competitive Programmer
              </DynamicDescription>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-red-300">CodeForces: <span className="font-medium">Pupil</span></span>
              <span className="text-yellow-300">LeetCode Rewind 2024: <span className="font-medium">Top 98%</span></span>
            </div>
          </DynamicContainer>
        );

      case 4: // compact - Research Impact
        return (
          <DynamicContainer className="flex items-center justify-center h-full w-full px-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-indigo-400 flex-shrink-0" />
              <DynamicDescription className="text-sm font-medium text-neutral-100 dark:text-neutral-100 truncate">
                <span className="text-indigo-300">7+ Projects</span> • ML Research
              </DynamicDescription>
            </div>
          </DynamicContainer>
        );

      case 5: // compactLong - Available Status
        return (
          <DynamicContainer className="flex items-center justify-center h-full w-full px-4">
            <div className="flex items-center gap-3">
              <Target className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-100">Open for</span>
                <span className="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded-full">SDE Roles</span>
                <span className="text-xs px-2 py-0.5 bg-pink-500/20 text-pink-300 rounded-full">May 2026</span>
              </div>
            </div>
          </DynamicContainer>
        );

      default:
        return (
          <DynamicContainer className="flex items-center justify-center h-full w-full px-3">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              <DynamicDescription className="text-sm font-medium text-neutral-100 dark:text-neutral-100">
                Software Developer
              </DynamicDescription>
            </div>
          </DynamicContainer>
        );
    }
  };

  return (
    <div className="relative">
      {/* Rotating glow effects with reduced opacity and adjusted scale */}
      <div 
        className="absolute inset-0 opacity-10 blur-md"
        style={{
          background: `conic-gradient(from 0deg, transparent, #38bdf880, transparent, #8b5cf680, transparent, #06b6d480, transparent)`,
          animation: 'spin 6s linear infinite',
          borderRadius: '50px',
          transform: 'scale(1.05)', // Reduced scale to prevent edge interference
        }}
      />
      <div 
        className="absolute inset-0 opacity-5 blur-lg"
        style={{
          background: `conic-gradient(from 180deg, transparent, #ec489980, transparent, #10b98180, transparent, #f59e0b80, transparent)`,
          animation: 'spin 8s linear infinite reverse',
          borderRadius: '50px',
          transform: 'scale(1.1)', // Reduced scale to prevent edge interference
        }}
      />
      
      {/* Dynamic Island with additional wrapper for isolation */}
      <div className="relative z-10 isolate">
        <DynamicIsland id="achievements-island">
          {renderContent()}
        </DynamicIsland>
      </div>
    </div>
  );
}

function IntroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      id="intro"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background glow blobbies specifically for intro */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex items-center min-h-screen w-full relative z-10">
        <div className="container mx-auto px-4 text-center mt-16">

          <motion.div 
            variants={slideUp} 
            className="mb-8 relative w-44 h-44 mx-auto group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Rotating gradient background border */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 rounded-full animate-spin [animation-duration:8s] opacity-75 blur-[1px] group-hover:opacity-100 transition-opacity" />
            
            {/* Inner background container to isolate the image */}
            <div className="absolute inset-[3px] bg-white dark:bg-gray-900 rounded-full p-[3px] flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/ayush-avatar.jpg"
                  alt="Developer's profile picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          <motion.h1 variants={slideUp} className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 ">
            Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Ayush Tiwari</span>
          </motion.h1>

          <motion.div variants={slideUp} className="my-4 mt-8 flex justify-center">
            <DynamicIslandProvider initialSize="compactLong">
              <AchievementsDynamicIsland />
            </DynamicIslandProvider>
          </motion.div>
          <motion.p variants={slideUp} className="text-lg md:text-xl mb-5 max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
            I aim to craft innovative projects at the intersection of
            <span className="font-bold"> Agentic AI</span>,
            <span className="font-bold"> Machine Learning</span>, and
            <span className="font-bold"> Software Engineering</span>.
            I'm driven by the vision of transforming complex challenges into meaningful technology that impacts lives.
          </motion.p>
          {/* TL;DR Button with animated border */}
          <motion.div
            variants={slideUp}
            className="relative inline-block overflow-hidden rounded-full p-[1.5px] focus-within:ring-2 focus-within:ring-sky-400 focus-within:ring-offset-2"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#38bdf8_0%,#6366f1_50%,#38bdf8_100%)]" />
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative inline-flex h-10 items-center justify-center rounded-full bg-white dark:bg-gray-900 px-5 py-5 text-xl font-bold backdrop-blur-3xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 font-bold">
                TL;DR <span className="ml-1 font-bold">⚡</span>
              </span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* TL;DR Modal */}
      <TldrModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.section>
  )
}

export default IntroSection;