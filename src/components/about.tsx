import { motion } from "framer-motion";
import ContactCard from "./contact-card";

function AboutMe() {
  return (
    <section className="pt-20" id="about-me">
      <div className="text-center mb-6">
        <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase block mb-2">[ 02 // IDENTITY ]</span>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
      </div>
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 max-w-7xl mx-auto px-4 py-8">
      <div className="w-full lg:w-[56%] flex items-center">
        <ContactCard />
      </div>
      <div className="w-full lg:w-[44%] flex flex-col justify-center">
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
          Hi, I&apos;m Ayush Tiwari, a software developer with 12+ months of hands-on experience as an SDE intern at startups. Currently exploring the fascinating world of LLMs and AI Agents, having graduated from IIT Bhubaneswar in May 2026. My journey has been marked by some exciting milestones — from being a Bronze Medalist at Inter IIT Tech Meet 11.0 and securing a Day 0 campus placement at Eternal (among roughly the top 5% of candidates shortlisted for the SDE role), to reaching the finals of multiple hackathons and securing rank 1114 among 45,000+ participants in IICPC Code Prelims 2025. I&apos;ve developed expertise in software design patterns and architecture through real-world projects, and I&apos;m passionate about bridging traditional engineering with cutting-edge AI technologies. When I&apos;m not building scalable systems, you&apos;ll find me contributing to open-source projects or diving deep into the latest developments in artificial intelligence.
        </motion.p>
      </div>
    </div>
    </section>
  );
}

export default AboutMe;