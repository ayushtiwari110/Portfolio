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
import MyJourney from './my-journey'
import WhyHireMe from './why-hire-me'

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
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen font-sans relative overflow-hidden transition-colors duration-500">
      {/* Premium ambient light blurs in background */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-15%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[65%] left-[-15%] w-[600px] h-[600px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />
      <IntroSection />
      <TechStackSection />
      <AboutMe />
      <ProjectsSection />
      <ExperienceSection />
      <MyJourney />
      <WhyHireMe />
      <ContactSection />
      <div>
        {/* footer with copyright text and cool tagline */}

        <div className="flex flex-col items-center gap-2 mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-300">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <p className="text-sm">
              &copy; 2026 Ayush Tiwari. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span>Last Updated: May 2026</span>
              <span className="text-neutral-300 dark:text-neutral-800 font-light">|</span>
              <span>Crafted with ❤️ by Ayush Tiwari</span>
            </div>
          </div>
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 z-50"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}