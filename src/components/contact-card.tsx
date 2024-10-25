import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/utils/motion-utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { GitHubDarkIcon, LinkedInIcon } from 'developer-icons';
import { Mail, Star, Code, Calendar, Trophy, FileText } from 'lucide-react';


const ProfileBadge = ({ icon: Icon, label, link, logo, isHoverCard = false, hackathons }: {
  icon?: React.ElementType;
  label: string;
  link: string;
  logo?: string;
  isHoverCard?: boolean;
  hackathons?: Array<{
    name: string;
    position: string;
    logo: string;
    date: string;
  }>;
}) => {
  const BadgeContent = (
    <motion.div
      className="flex items-center px-3 py-1.5 rounded-md bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 text-primary shadow-sm flex-1 min-w-[200px] cursor-pointer border border-gray-300"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && <Icon className="w-4 h-4 mr-1.5 opacity-80 flex-shrink-0" />}
      {logo && <Image src={logo} alt={label} width={16} height={16} className="mr-1.5 opacity-90 flex-shrink-0" />}
      <span className="text-sm font-medium truncate">{label}</span>
    </motion.div>
  );

  if (isHoverCard) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          {BadgeContent}
        </HoverCardTrigger>
        <HoverCardContent 
          align="start" 
          className="w-72 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg"
        >
          <div className="space-y-4">
            <h4 className="text-lg text-center font-semibold text-gray-900 dark:text-gray-100">Hackathons</h4>
            <div className="space-y-3">
              {hackathons?.map((hackathon, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                    <Image
                      src={hackathon.logo}
                      alt={hackathon.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{hackathon.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {hackathon.position} • {hackathon.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-3 py-1.5 rounded-md bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 text-primary transition-all duration-300 shadow-sm flex-1 min-w-[200px]"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && <Icon className="w-4 h-4 mr-1.5 opacity-80 flex-shrink-0" />}
      {logo && <Image src={logo} alt={label} width={16} height={16} className="mr-1.5 opacity-90 flex-shrink-0" />}
      <span className="text-sm font-medium truncate">{label}</span>
    </motion.a>
  );
};

const ContactItem = ({ icon: Icon, logo, content, link }: { icon?: React.ElementType; content: string; logo?: string; link?: string }) => {
  const Wrapper = link ? motion.a : motion.div;
  const props = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...props}
      className={`flex items-center space-x-2 py-1 ${link ? 'hover:text-primary cursor-pointer' : ''}`}
      whileHover={{ x: 2 }}
    >
      {Icon && <Icon className="w-4 h-4 text-primary/70 flex-shrink-0" />}
      {logo && <Image src={logo} alt={logo} width={16} height={16} className="rounded-full flex-shrink-0" />}
      <span className="text-xs text-gray-700 dark:text-gray-300 truncate">{content}</span>
    </Wrapper>
  )
}

const SkillBadge = ({ label }: { label: string }) => (
  <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
    {label}
  </span>
)

const ContactCard = () => {
  const achievements = [
    { label: "300+ commits", icon: GitHubDarkIcon, link: "https://github.com/ayushtiwari110" },
    { label: "400+ solved", logo: "/leetcode.png", link: "https://leetcode.com/u/ayushtiwari110" },
    { label: "100+ solved", logo: "/codeforces.png", link: "https://codeforces.com/profile/ayushtiwari110" },
    {
      label: "4+ Hackathons",
      icon: Trophy,
      link: "#",
      isHoverCard: true,
      hackathons: [
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
    }
  ];

  const skills = ["React", "TypeScript", "Python", "Machine Learning", "GenAI", "Next.js"];

  const socialLinks = [
    { icon: LinkedInIcon, content: "linkedin.com/in/tiwari-ayush", link: "https://linkedin.com/in/tiwari-ayush" },
    { icon: GitHubDarkIcon, content: "github.com/ayushtiwari110", link: "https://github.com/ayushtiwari110" },
    { icon: Mail, content: "21mm02005@iitbbs.ac.in", link: "mailto:21mm02005@iitbbs.ac.in" },
  ];

  const stats = [
    { icon: Star, label: "Open Source Contributor" },
    { icon: Code, label: "Full Stack Developer" },
    { icon: Calendar, label: "1+ Years Experience" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="w-full max-w-5xl mx-auto px-4 sm:px-6"
    >
      <Card className="shadow-xl dark:bg-gray-800 border dark:border-0">
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
                <motion.h2
                  variants={slideUp}
                  className="text-xl sm:text-2xl font-bold mb-1 text-gray-900 dark:text-gray-100"
                >
                  Ayush Tiwari
                </motion.h2>
                <motion.p
                  variants={slideUp}
                  className="text-sm text-gray-600 dark:text-gray-400 mb-2"
                >
                  Software Developer | Machine Learning | GenAI
                </motion.p>
                <motion.div variants={slideUp} className="flex flex-wrap justify-center sm:justify-start gap-2">
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
              <motion.div variants={slideUp} className="space-y-1">
                {socialLinks.slice(0, 2).map((item, index) => (
                  <ContactItem
                    key={index}
                    icon={item.icon}
                    content={item.content}
                    link={item.link}
                  />
                ))}
              </motion.div>
              <motion.div variants={slideUp} className="space-y-1">
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

            {/* Skills Section */}
            <motion.div variants={slideUp} className="flex flex-wrap justify-center sm:justify-start gap-1.5">
              {skills.map((skill, index) => (
                <SkillBadge key={index} label={skill} />
              ))}
            </motion.div>

            {/* Achievements Section */}
            <motion.div variants={slideUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {achievements.map((achievement, index) => (
                <ProfileBadge
                  key={index}
                  icon={achievement.icon}
                  logo={achievement.logo}
                  label={achievement.label}
                  link={achievement.link}
                  isHoverCard={achievement.isHoverCard}
                  hackathons={achievement.hackathons}
                />
              ))}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ContactCard