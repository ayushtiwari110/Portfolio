'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from './navbar'
import IntroSection from './intro'
import AboutMe from './about'
import TechStackSection from './tech-stack'
import ProjectsSection from './projects'
import ExperienceSection from './experience'
import ContactSection from './contact'

export default function Portfolio() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <IntroSection />
      <TechStackSection />
      <AboutMe />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}