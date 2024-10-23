import { motion } from "framer-motion";
import Image from "next/image";
import { staggerChildren, slideUp } from "@/utils/motion-utils";

function IntroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      id="intro"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.div variants={slideUp} className="mb-8 relative w-48 h-48 mx-auto">
          <Image
            src="/ayush-avatar.jpg"
            alt="Developer's profile picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-primary mx-auto shadow-lg"
          />
        </motion.div>
        <motion.h1 variants={slideUp} className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Hello, I&apos;m Ayush Tiwari
        </motion.h1>
        <motion.p variants={slideUp} className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Software Developer | Prefinal year @ IIT Bhubaneswar | Machine Learning
        </motion.p>
        <motion.p variants={slideUp} className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
          I craft innovative digital solutions at the intersection of web, mobile, and AI, while nurturing the next generation of tech talent at IIT Bhubaneswar.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default IntroSection