import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { slideUp, staggerChildren } from '@/utils/motion-utils'
import { LinkedInIcon } from 'developer-icons'

function ContactSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={slideUp} className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Contact Me</motion.h2>
        <motion.div variants={staggerChildren} className="max-w-md mx-auto">
          <motion.div variants={slideUp} className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-primary mr-4" />
            <a href="mailto:21mm02005@iitbbs.ac.in" className="text-gray-600 dark:text-gray-300 hover:text-primary">21mm02005@iitbbs.ac.in</a>
          </motion.div>
          <motion.div variants={slideUp} className="flex items-center mb-4">
            <LinkedInIcon className="w-6 h-6 text-primary mr-4" />
            <a href="https://www.linkedin.com/in/tiwari-ayush" className="text-gray-600 dark:text-gray-300 hover:text-primary">Linkedin</a>
          </motion.div>
          <motion.div variants={slideUp} className="flex items-center">
            <MapPin className="w-6 h-6 text-primary mr-4" />
            <span className="text-gray-600 dark:text-gray-300">Indian Institute of Technology (IIT), Bhubaneswar</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactSection