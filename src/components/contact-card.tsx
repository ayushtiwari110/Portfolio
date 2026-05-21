'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { CardContent } from '@/components/ui/card'
import { LinkedInIcon } from 'developer-icons'
import { Mail, Star, Code, Calendar, FileText, QrCode, Github, X } from 'lucide-react'
import SpotlightCard from './ui/spotlight-card'

const ProfileBadge = ({ icon: Icon, label, link, logo }: { icon?: React.ElementType, label: string, link: string, logo?: string }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1.5 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-neutral-200/40 dark:border-neutral-800/40 hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-300 shadow-sm"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && <Icon className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 opacity-80 flex-shrink-0" />}
      {logo && <Image src={logo} alt={label} width={12} height={12} className="mr-1.5 sm:mr-2 opacity-90 flex-shrink-0" />}
      <span className="text-[10px] sm:text-[11px] font-medium whitespace-normal leading-tight">{label}</span>
    </motion.a>
  )
}

const ContactItem = ({ icon: Icon, logo, content, link }: { icon?: React.ElementType, logo?: string, content: string, link: string }) => {
  const Wrapper = link ? motion.a : motion.div
  const props = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Wrapper
      {...props}
      className={`flex items-center space-x-2 py-0 sm:py-1 px-1 sm:px-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/10 transition-all duration-200 ${link ? 'cursor-pointer' : ''}`}
      whileHover={{ x: 3 }}
    >
      {Icon && (
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-neutral-100 dark:bg-neutral-850 flex items-center justify-center flex-shrink-0 text-neutral-400 dark:text-neutral-500 border border-neutral-200/30 dark:border-neutral-800/30">
          <Icon className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5" />
        </div>
      )}
      {logo && <Image src={logo} alt={content} width={12} height={12} className="rounded-full flex-shrink-0" />}
      <span className="text-[10.5px] sm:text-xs font-medium truncate">{content}</span>
    </Wrapper>
  )
}

const HackathonItem = ({ name, position, logo, date }: { name: string, position: string, logo: string, date: string }) => (
  <motion.div
    className="flex items-center gap-2 sm:gap-3 py-1 sm:py-2 px-1 sm:px-2 border-b border-neutral-100/50 dark:border-neutral-800/30 last:border-0 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/10 rounded-lg transition-all duration-200"
    whileHover={{ x: 2 }}
  >
    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg overflow-hidden bg-white dark:bg-gray-800 flex-shrink-0 flex items-center justify-center border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm">
      <Image
        src={logo}
        alt={name}
        width={22}
        height={22}
        className="object-contain p-0.5"
      />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1">
        <h4 className="text-[11px] sm:text-sm font-semibold text-gray-900 dark:text-gray-100 whitespace-normal leading-snug">{name}</h4>
        <span className="text-[8.5px] sm:text-[10px] text-neutral-400 dark:text-neutral-500 flex-shrink-0 font-medium">{date}</span>
      </div>
      <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 whitespace-normal leading-snug mt-0.25 sm:mt-0.5">{position}</p>
    </div>
  </motion.div>
)

const ContactCard = () => {
  const [showQr, setShowQr] = React.useState(false)
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    // Max tilt angle of 6 degrees
    const tiltX = (mouseY / (height / 2)) * -6
    const tiltY = (mouseX / (width / 2)) * 6
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const achievements = [
    { label: "300+ commits", icon: Github, link: "https://github.com/ayushtiwari110" },
    { label: "500+ solved", logo: "/leetcode.png", link: "https://leetcode.com/u/ayushtiwari110" },
    { label: "Peak Rating 1366", logo: "/codeforces.png", link: "https://codeforces.com/profile/ayushtiwari110" },
    { label: "150+ solved", logo: "/usaco.png", link: "https://usaco.org" }
  ]

  const hackathons = [
    {
      name: "HackerRank Orchestrate",
      position: "Rank 50 out of 1,349 participants",
      logo: "/Hackerrank.png",
      date: "May 2026"
    },
    {
      name: "Algorithmic Coding GC 2025",
      position: "3rd Place",
      logo: "/gciitbbs.png",
      date: "Mar 2025"
    },
    {
      name: "Ethos Hackathon IIT Guwahati",
      position: "50 Finalist Teams",
      logo: "/ethos.png",
      date: "Spring 2023"
    },
    {
      name: "SDE Hackathon IIT Bhubaneswar",
      position: "3rd Place",
      logo: "/gciitbbs.png",
      date: "Winter 2022"
    }
  ]

  const socialLinks = [
    { icon: LinkedInIcon, content: "linkedin.com/in/tiwari-ayush", link: "https://linkedin.com/in/tiwari-ayush" },
    { icon: Github, content: "github.com/ayushtiwari110", link: "https://github.com/ayushtiwari110" },
    { icon: Mail, content: "21mm02005@iitbbs.ac.in", link: "mailto:21mm02005@iitbbs.ac.in" },
  ]

  const stats = [
    { icon: Star, label: "Open Source Contributor" },
    { icon: Code, label: "Full Stack Developer" },
    { icon: Calendar, label: "1+ Years Experience" },
    { icon: LinkedInIcon, label: "Top CS Voice (Aug 2024)" }
  ]

  return (
    <div className="relative group/card w-full max-w-5xl mx-auto px-0 [perspective:1000px]">
      {/* Ambient Glow Aura */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-500/20 dark:via-indigo-500/20 dark:to-purple-500/20 rounded-[32px] blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
      
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        <SpotlightCard
          spotlightColor="rgba(0, 229, 255, 0.15)"
          className="group bg-gradient-to-br from-slate-50/80 via-white/95 to-slate-100/50 dark:from-slate-900/70 dark:via-slate-950/90 dark:to-blue-950/40 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/50 ring-1 ring-white/30 dark:ring-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)] hover:shadow-2xl transition-all duration-500 relative overflow-hidden rounded-3xl"
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Laminated Glossy Shine Sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent pointer-events-none" />

        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-10" />
 
        <CardContent className="p-3 sm:p-5 pt-4 sm:pt-6 relative z-10">
          <div className="flex flex-col gap-2.5 sm:gap-4">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-6 border-b border-neutral-200/30 dark:border-neutral-800/30 pb-2.5 sm:pb-4 relative">
              {/* QR Code / Digital Card Accent & Smart Chip */}
              <div className="absolute top-0 right-0 hidden sm:flex items-center gap-3">
                {/* Micro Smart Chip Graphic */}
                <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 dark:from-amber-600 dark:via-yellow-500 dark:to-amber-800 p-[1px] shadow-sm relative overflow-hidden flex items-center justify-center opacity-95 border border-amber-300/30 dark:border-amber-700/30">
                  <div className="w-full h-full border border-black/20 dark:border-white/40 rounded-[4px] relative">
                    <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-black/25 dark:bg-white/50" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-[0.5px] bg-black/25 dark:bg-white/50" />
                    <div className="absolute top-0 bottom-0 right-1/3 w-[0.5px] bg-black/25 dark:bg-white/50" />
                    <div className="absolute top-1/4 bottom-1/4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-[2px] border border-black/30 dark:border-white/50 bg-black/5 dark:bg-white/10" />
                  </div>
                </div>

                <button
                  onClick={() => setShowQr(!showQr)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                    showQr
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-neutral-100/80 dark:bg-neutral-800/40 border-neutral-200/60 dark:border-neutral-700/40 text-neutral-700 dark:text-neutral-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900/50'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Digital ID</span>
                </button>
              </div>

              <motion.div
                className="relative w-14 h-14 sm:w-24 sm:h-24 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient ring border for avatar */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-md">
                  <div className="relative w-full h-full rounded-[10px] sm:rounded-[14px] overflow-hidden bg-white dark:bg-gray-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
                    <Image
                      src="/ayush-avatar.jpg"
                      alt="Ayush Tiwari profile picture"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="flex-1 text-center sm:text-left space-y-1 sm:space-y-2">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Ayush Tiwari
                  </h2>
                  <p className="text-[11px] sm:text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Software Developer | ML & Agentic AI
                  </p>
                </div>
                {/* Stats badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-0.5 sm:gap-1.5">
                  {stats.map((stat, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 px-1.5 py-0 sm:px-2.5 sm:py-0.5 text-[8.5px] sm:text-[10px] font-medium bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30 rounded-full"
                    >
                      <stat.icon className="w-3 h-3 flex-shrink-0" />
                      {stat.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Split layout: Network & Competencies (Left) vs Hackathons (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 pt-0.5 sm:pt-1">
              {/* Left Column: Network & Competencies */}
              <div className="md:col-span-5 space-y-3 md:space-y-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[10px] font-mono font-bold text-neutral-400/80 dark:text-neutral-500/70 tracking-[0.2em] uppercase mb-1.5 sm:mb-2 flex items-center gap-1.5">
                    <span className="text-indigo-500/70 dark:text-indigo-400/60 font-sans">{"//"}</span> Network
                  </h3>
                  <div className="space-y-1">
                    {socialLinks.map((item, index) => (
                      <ContactItem
                        key={index}
                        icon={item.icon}
                        content={item.content}
                        link={item.link}
                      />
                    ))}
                    <ContactItem icon={FileText} content="View Resume" link='https://drive.google.com/file/d/12qc4CtVxlxVphq8JWoTHOZ-cumv-MtLX/view?usp=drive_link' />
                  </div>
                </div>

                <div className="pt-1 sm:pt-2">
                  <h3 className="text-[10px] font-mono font-bold text-neutral-400/80 dark:text-neutral-500/70 tracking-[0.2em] uppercase mb-1.5 sm:mb-2 flex items-center gap-1.5">
                    <span className="text-indigo-500/70 dark:text-indigo-400/60 font-sans">{"//"}</span> Competencies
                  </h3>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
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
                </div>
              </div>

              {/* Right Column: Hackathons */}
              <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-neutral-200/30 dark:border-neutral-800/30 pt-2.5 md:pt-0 md:pl-5">
                <h3 className="text-[10px] font-mono font-bold text-neutral-400/80 dark:text-neutral-500/70 tracking-[0.2em] uppercase mb-1.5 sm:mb-2 flex items-center gap-1.5">
                  <span className="text-indigo-500/70 dark:text-indigo-400/60 font-sans">{"//"}</span> Featured Hackathons
                </h3>
                {/* Always visible hackathons (first 2) */}
                <div className="space-y-1">
                  {hackathons.slice(0, 2).map((hackathon, index) => (
                    <HackathonItem key={index} {...hackathon} />
                  ))}
                </div>

                {/* Collapsible hackathons (remaining) */}
                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : '0px' }}
                  className="overflow-hidden md:!h-auto"
                >
                  <div className="space-y-1 pt-0.5">
                    {hackathons.slice(2).map((hackathon, index) => (
                      <HackathonItem key={index} {...hackathon} />
                    ))}
                  </div>
                </motion.div>

                {/* Mobile Toggle Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="md:hidden w-full mt-2.5 py-1.5 flex items-center justify-center gap-1 text-[11px] font-mono tracking-wider uppercase text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-100/50 dark:border-indigo-900/30 rounded-xl transition-all duration-200"
                >
                  <span>{isExpanded ? 'Show Less [-]' : `Show More (${hackathons.length - 2}) [+]`}</span>
                </button>
              </div>
            </div>

            {/* Card Footer / Issuer details */}
            <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-neutral-200/20 dark:border-neutral-800/20 text-[8px] sm:text-[9px] font-mono tracking-widest text-neutral-400/60 dark:text-neutral-500/40 uppercase">
              <span>System Access: Authorized</span>
              <span>ID: AT-2026-IITBBS</span>
            </div>
          </div>
        </CardContent>

        {/* QR Code Popover Overlay */}
        {showQr && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/95 dark:bg-slate-950/95 backdrop-blur-md p-6 rounded-3xl"
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4 text-center max-w-sm">
              <div className="bg-indigo-50/50 dark:bg-indigo-950/10 p-1.5 rounded-2xl inline-block border border-indigo-100/50 dark:border-indigo-900/30">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase px-2.5 py-0.5 block">
                  Connect Digitally
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Ayush Tiwari&apos;s Portfolio</h3>
              <div className="bg-white p-3 rounded-2xl inline-block border border-neutral-200/50 dark:border-neutral-800/50 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://portfolio-ten-sandy-47.vercel.app/&color=4f46e5&bgcolor=ffffff"
                  alt="Ayush Tiwari Portfolio QR Code"
                  className="w-36 h-36 rounded-lg object-contain"
                />
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Scan this QR code with your phone camera to view my full interactive portfolio.
              </p>
            </div>
          </motion.div>
        )}
      </SpotlightCard>
      </motion.div>
    </div>
  )
}

export default ContactCard