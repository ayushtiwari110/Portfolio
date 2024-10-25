"use client";
import { fadeIn } from "@/utils/motion-utils";
import { motion } from "framer-motion";
import { useCallback } from "react";

function Navbar() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">Ayush T.</span>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('intro')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</button>
            <button onClick={() => scrollToSection('tech-stack')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Tech Stack</button>
            <button onClick={() => scrollToSection('about-me')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About Me</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Experience</button>
            <button onClick={() => scrollToSection('my-journey')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">My Journey</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar