import React from 'react';
import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Users, Target, Coffee } from 'lucide-react';

function WhyHireMe() {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack & Systems Engineering",
      description: "Proven full-stack capability extending from responsive frontend interfaces to scalable backend services. Experienced in designing SQS/SNS job schedulers, full-stack anomalies detection systems (2,000+ lines of robust code), and CI/CD automation with 95% test coverage."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Rapid Adaptability & AI",
      description: "Demonstrated rapid progression from basic scripting to training advanced ML material science models (CGCNN, MEGNet) and orchestrating multi-agent LLM execution graphs (Anthropic: Building Effective Agents model)."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Proven Excellence",
      description: "Day 0 placement at Eternal (top 5% of candidates), All India Rank 1114 in ICPC Prelims, and Global Rank 50 in HackerRank Orchestrate, showcasing elite competitive coding and system design skills."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership & Collaboration",
      description: "Governor of the Web and Design Society at IIT Bhubaneswar. Coordinated frontend teams for campus-wide applications, mentored junior engineers on architectural patterns, and contributed to open-source CI/CD workflows."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact-Driven",
      description: "Architected General Championship applications adopted by 2,900+ active student users (4.9★ rating). Resolved endpoint validation issues across 20+ production services during early-stage startup backend internship."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Progression",
      description: "From JEE Advanced preparation to a B.Tech + M.Tech Dual Degree at IIT Bhubaneswar and SDE-1, driven by a deep technical curiosity to design reliable, enterprise-grade software architectures."
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500 relative overflow-hidden"
      id='why-hire-me'
    >
      {/* Ambient background blurs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase block mb-2">[ 06 // QUALITY ]</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Hire Me?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From coding my first "Hello World" to developing enterprise applications, 
              my journey reflects dedication, rapid growth, and a passion for creating impactful solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 dark:bg-gray-950/40 backdrop-blur-md p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800/50 hover:border-indigo-500/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/30 rounded-lg mr-4 text-indigo-600 dark:text-indigo-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {quality.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyHireMe;