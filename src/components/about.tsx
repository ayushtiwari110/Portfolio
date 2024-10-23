import { motion } from "framer-motion";
import ContactCard from "./contact-card";

function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
      <div className="lg:w-1/2">
        <ContactCard />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold italic text-gray-900 dark:text-gray-100 mb-6"
        >
          &quot;The only way to do great work is to love what you do.&quot;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 dark:text-gray-300"
        >
          Hi, I&apos;m Ayush Tiwari, a passionate software developer with a keen interest in Machine Learning and Generative AI. Currently pursuing my degree at IIT Bhubaneswar, I&apos;m constantly exploring new technologies and pushing the boundaries of what&apos;s possible in the world of computer science. When I&apos;m not coding, you can find me participating in hackathons, solving complex problems on competitive programming platforms, or contributing to open-source projects. I believe in the power of technology to make a positive impact on the world, and I&apos;m excited to be part of this ever-evolving field.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutMe;