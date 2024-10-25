import React from 'react';
import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Users, Target, Coffee } from 'lucide-react';

function WhyHireMe() {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Expertise",
      description: "From React Native to AWS Lambda, I've mastered both frontend and backend technologies, delivering scalable solutions that serve thousands of users. I've also gained experience in CI/CD pipelines, and Unit Testing."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quick Learner & Adaptable",
      description: "Started from Python basics to implementing ML models in Material Science within 3 years and gaining 12+ months experience in early stage startups, showcasing rapid learning and versatility."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Consistently balanced academics with internships, hackathons, and open-source contributions, showcasing a strong work ethic and commitment to excellence."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership & Mentorship",
      description: "Led development teams, mentored juniors, and contributed to open source, demonstrating strong collaboration skills."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact-Driven",
      description: "Created apps serving 2900+ students with 4.9-star ratings. Also in my internship, worked on key features of app serving 1000+ users."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Growth",
      description: "From 'Hello World' to implementing CGCNN models, my journey shows consistent progression and hunger for knowledge."
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-gray-900 dark:via-indigo-900/10 dark:to-gray-900"
      id='why-hire-me'
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-50 dark:bg-gray-700 rounded-lg mr-4 text-indigo-600 dark:text-indigo-300 group-hover:bg-indigo-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
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