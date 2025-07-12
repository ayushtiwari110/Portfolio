import { motion } from "framer-motion";
import ContactCard from "./contact-card";

function AboutMe() {
  return (
    <section className="pt-20">
      <h2 className="text-4xl text-center font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8" id="about-me">
      <div className="lg:w-1/2">
        <ContactCard />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-center font-semibold italic text-gray-900 dark:text-slate-500 mb-6"
        >
          &quot;Make your work so uniquely yours, it speaks before your name does.&quot;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 dark:text-gray-300"
        >
          Hi, I&apos;m Ayush Tiwari, a software developer with 12+ months of hands-on experience as an SDE intern at startups. Currently exploring the fascinating world of LLMs and AI Agents while pursuing my final year at IIT Bhubaneswar. My journey has been marked by some exciting milestones - from being a Bronze Medalist at Inter IIT Tech Meet 11.0 to reaching the finals of multiple hackathons and securing rank 1114 among 45,000+ participants in IICPC Code Prelims 2025. I&apos;ve developed expertise in software design patterns and architecture through real-world projects, and I&apos;m passionate about bridging traditional engineering with cutting-edge AI technologies. When I&apos;m not building scalable systems, you&apos;ll find me contributing to open-source projects or diving deep into the latest developments in artificial intelligence.
        </motion.p>
      </div>
    </div>
    </section>
  );
}

export default AboutMe;