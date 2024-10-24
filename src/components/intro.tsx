import { motion } from "framer-motion";
import Image from "next/image";
import { staggerChildren, slideUp } from "@/utils/motion-utils";
import { BackgroundLines } from "./ui/background-lines";

function IntroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      id="intro"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <BackgroundLines className="bg-white dark:bg-gray-900 flex items-center min-h-screen">
        <div className="container mx-auto px-4 text-center mt-20">
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
            Software Developer | Prefinal year @ IIT Bhubaneswar | Machine Learning
          </motion.p>
          <motion.p variants={slideUp} className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
          I aim to craft innovative digital solutions at the intersection of 
  <span className="font-bold"> Generative AI</span>, 
  <span className="font-bold"> Machine Learning</span>, and 
  <span className="font-bold"> Software Engineering</span>. 
  Driven by the vision of transforming complex challenges into meaningful technology that impacts lives.
          </motion.p>
        </div>
      </BackgroundLines>
    </motion.section>
  )
}

export default IntroSection