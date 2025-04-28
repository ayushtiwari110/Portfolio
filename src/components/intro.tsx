import { motion } from "framer-motion";
import Image from "next/image";
import { staggerChildren, slideUp } from "@/utils/motion-utils";
import { BackgroundLines } from "./ui/background-lines";
import { useState } from "react";
import TldrModal from "./tldr-modal";

function IntroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      id="intro"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <BackgroundLines className="bg-white dark:bg-gray-900 flex items-center min-h-screen">
        <div className="container mx-auto px-4 text-center mt-16">

          <motion.div variants={slideUp} className="mb-8 relative w-48 h-48 mx-auto">
            <Image
              src="/ayush-avatar.jpg"
              alt="Developer's profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-primary mx-auto shadow-lg"
            />
          </motion.div>
          <motion.h1 variants={slideUp} className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100 ">
            Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Ayush Tiwari</span>
          </motion.h1>

          <motion.p variants={slideUp} className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Software Development | Prefinal year @ IIT Bhubaneswar | Machine Learning
          </motion.p>
          <motion.p variants={slideUp} className="text-lg md:text-xl mb-5 max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
            I aim to craft innovative projects at the intersection of
            <span className="font-bold"> Generative AI</span>,
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
      </BackgroundLines>

      {/* TL;DR Modal */}
      <TldrModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.section>
  )
}

export default IntroSection