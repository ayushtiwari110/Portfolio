"use client";
import { fadeIn } from "@/utils/motion-utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

function Navbar() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Floating state
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Scroll spy state
      if (window.scrollY < 100) {
        setActiveSection('intro');
        return;
      }

      const sections = [
        'intro',
        'tech-stack',
        'about-me',
        'projects',
        'experience',
        'my-journey',
        'why-hire-me',
        'contact'
      ];

      let currentSection = 'intro';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 80) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize active section on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'intro', label: 'Home' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'about-me', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'my-journey', label: 'My Journey' },
    { id: 'why-hire-me', label: 'Why Me?' },
    { id: 'contact', label: 'Contact' }
  ];

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-0 pointer-events-none"
      >
        <div className={`mx-auto px-6 py-3 transition-all duration-300 pointer-events-auto
          ${isScrolled
            ? 'mt-4 max-w-5xl rounded-full shadow-lg border border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg px-8 py-3'
            : 'w-full max-w-none border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Branding/Logo */}
            <motion.button
              onClick={() => scrollToSection('intro')}
              className="text-xl font-bold bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text hover:opacity-85 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ayush T.
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                    ${activeSection === item.id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right Actions (Desktop) */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="https://drive.google.com/file/d/12qc4CtVxlxVphq8JWoTHOZ-cumv-MtLX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white shadow-sm transition-all duration-300 flex items-center gap-1.5"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-900 z-50 md:hidden shadow-xl"
      >
        <div className="flex flex-col h-full py-6">
          <div className="px-6 mb-8 flex justify-between items-center">
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
            >
              Menu
            </motion.span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 px-3 overflow-y-auto">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors duration-200 mb-1
                  ${activeSection === item.id
                    ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="px-4 py-3 mt-4">
              <a
                href="https://drive.google.com/file/d/12qc4CtVxlxVphq8JWoTHOZ-cumv-MtLX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg text-center text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
          <div className="px-6 pt-6 mt-auto border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Ayush T.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;