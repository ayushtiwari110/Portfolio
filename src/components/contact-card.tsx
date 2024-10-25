'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { GitHubDarkIcon, LinkedInIcon } from 'developer-icons'
import { Mail, Star, Code, Calendar, FileText, ChevronDown } from 'lucide-react'

const ProfileBadge = ({ icon: Icon, label, link, logo }: { icon?: React.ElementType, label: string, link: string, logo?: string }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-3 py-2 rounded-md bg-primary/5 hover:bg-primary/10 text-primary transition-all duration-300 shadow-sm"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && <Icon className="w-4 h-4 mr-2 opacity-80 flex-shrink-0" />}
      {logo && <Image src={logo} alt={label} width={16} height={16} className="mr-2 opacity-90 flex-shrink-0" />}
      <span className="text-sm font-medium truncate">{label}</span>
    </motion.a>
  )
}

const ContactItem = ({ icon: Icon, logo, content, link }: { icon?: React.ElementType, logo?: string, content: string, link: string }) => {
  const Wrapper = link ? motion.a : motion.div
  const props = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Wrapper
      {...props}
      className={`flex items-center space-x-2 py-1 ${link ? 'hover:text-primary cursor-pointer' : ''}`}
      whileHover={{ x: 2 }}
    >
      {Icon && <Icon className="w-4 h-4 text-primary/70 flex-shrink-0" />}
      {logo && <Image src={logo} alt={content} width={16} height={16} className="rounded-full flex-shrink-0" />}
      <span className="text-xs text-gray-700 dark:text-gray-300 truncate">{content}</span>
    </Wrapper>
  )
}

const SkillBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 text-xs font-medium bg-white  dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
    {label}
  </span>
)

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-3"
  >
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
    {children}
  </motion.div>
)

const HackathonCard = ({ name, position, logo, date }: { name: string, position: string, logo: string, date: string }) => (
  <motion.div 
    className="p-3 rounded-xl bg-gray-400/10 dark:bg-gray-700/50 border border-gray-700/10"
    whileHover={{ y: -2, scale: 1.01 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white dark:bg-gray-700 flex-shrink-0">
        <Image
          src={logo}
          alt={name}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{name}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {position}
        </p>
        <p className="text-xs text-primary/70 mt-1">{date}</p>
      </div>
    </div>
  </motion.div>
)

const ContactCard = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const achievements = [
    { label: "300+ commits", icon: GitHubDarkIcon, link: "https://github.com/ayushtiwari110" },
    { label: "400+ solved", logo: "/leetcode.png", link: "https://leetcode.com/u/ayushtiwari110" },
    { label: "100+ solved", logo: "/codeforces.png", link: "https://codeforces.com/profile/ayushtiwari110" }
  ]

  const hackathons = [
    {
      name: "Hacktoberfest",
      position: "Level 4 Contributor",
      logo: "/hacktoberfest.png",
      date: "Autumn 2022"
    },
    {
      name: "Ethos Hackathon IIT Guwahati",
      position: "50 Finalist Teams",
      logo: "/ethos.png",
      date: "Spring 2023"
    },
    {
      name: "GirlScript Summer of Code",
      position: "Contributor",
      logo: "/gssoc.png",
      date: "Summer 2023"
    },
    {
      name: "SDE Hackathon IIT Bhubaneswar",
      position: "3rd Place",
      logo: "/gciitbbs.png",
      date: "Winter 2022"
    }
  ]

  const skills = ["React", "TypeScript", "Python", "Machine Learning", "GenAI", "Next.js"]

  const socialLinks = [
    { icon: LinkedInIcon, content: "linkedin.com/in/tiwari-ayush", link: "https://linkedin.com/in/tiwari-ayush" },
    { icon: GitHubDarkIcon, content: "github.com/ayushtiwari110", link: "https://github.com/ayushtiwari110" },
    { icon: Mail, content: "21mm02005@iitbbs.ac.in", link: "mailto:21mm02005@iitbbs.ac.in" },
  ]

  const stats = [
    { icon: Star, label: "Open Source Contributor" },
    { icon: Code, label: "Full Stack Developer" },
    { icon: Calendar, label: "1+ Years Experience" },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 "
    >
      <Card className="shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 dark:bg-gray-800 border dark:border-gray-700 overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <motion.div
                className="relative w-20 h-20 sm:w-24 sm:h-24"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                  <Image
                    src="/ayush-avatar.jpg"
                    alt="Developer's profile picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>
              </motion.div>

              <div className="flex-1 text-center sm:text-left">
                <motion.h2 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                  Ayush Tiwari
                </motion.h2>
                <motion.p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Software Developer | Machine Learning | GenAI
                </motion.p>
                <motion.div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {stats.map((stat, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 px-2 py-1 bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      <stat.icon className="w-3 h-3 flex-shrink-0" />
                      {stat.label}
                    </Badge>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-x-8">
              <motion.div className="space-y-1">
                {socialLinks.slice(0, 2).map((item, index) => (
                  <ContactItem
                    key={index}
                    icon={item.icon}
                    content={item.content}
                    link={item.link}
                  />
                ))}
              </motion.div>
              <motion.div className="space-y-1">
                {socialLinks.slice(2).map((item, index) => (
                  <ContactItem
                    key={index}
                    icon={item.icon}
                    content={item.content}
                    link={item.link}
                  />
                ))}
                <ContactItem icon={FileText} content="View Resume" link='https://drive.google.com/drive/folders/18RunmuxnePpw3Tg0kTDh_VWY3Mw-Tfsn?usp=drive_link' />
              </motion.div>
            </div>

            {/* Expand/Collapse Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200 w-full "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-8 overflow-hidden"
                >
                  {/* Skills Section */}
                  <Section title="Skills">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <SkillBadge key={index} label={skill} />
                      ))}
                    </div>
                  </Section>

                  {/* Achievements Section */}
                  <Section title="Coding Profiles">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {achievements.map((achievement, index) => (
                        <ProfileBadge
                          key={index}
                          icon={achievement.icon}
                          logo={achievement.logo}
                          label={achievement.label}
                          link={achievement.link}
                        />
                      ))}
                    </div>
                  </Section>

                  {/* Hackathons Section */}
                  <Section title="Hackathons">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {hackathons.map((hackathon, index) => (
                        <HackathonCard key={index} {...hackathon} />
                      ))}
                    </div>
                  </Section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactCard