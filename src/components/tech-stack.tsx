import { motion } from 'framer-motion'
import { staggerChildren, slideUp } from '@/utils/motion-utils'
import { ReactIcon, NextJsIcon, NodeJsIcon, JavaScriptIcon, JavaIcon, TypeScriptIcon, MongoDBIcon, PrismaIcon, MySQLIcon, JestIcon, FigmaIcon, PythonIcon, CPlusPlusIcon, CircleCIIcon, PyTorchIcon, ClaudeAIIcon, GraphQLIcon, AWSIcon, DockerIcon, GitIcon, CIcon, ExpressJsLightIcon, StorybookIcon, ReactQueryIcon, ReactRouterIcon, ReduxIcon } from 'developer-icons'

function TechStackItem({ icon: Icon, name }: { icon: React.ElementType; name: string }) {
  return (
    <motion.div
      variants={slideUp}
      className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2"
    >
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
    </motion.div>
  )
}

function TechStackSection() {
  const techStack = [
    { name: 'C', icon: CIcon },
    { name: 'C++', icon: CPlusPlusIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'React.js', icon: ReactIcon },
    { name: 'React Query', icon: ReactQueryIcon },
    { name: 'React Router', icon: ReactRouterIcon },
    { name: 'Redux', icon: ReduxIcon },
    { name: 'Node.js', icon: NodeJsIcon },
    { name: 'Next.js', icon: NextJsIcon },
    { name: 'Express.js', icon: ExpressJsLightIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'SQL', icon: MySQLIcon },
    { name: 'Prisma ORM', icon: PrismaIcon },
    { name: 'Jest Unit Testing', icon: JestIcon },
    { name: 'StoryBook.js', icon: StorybookIcon },
    { name: 'CI/CD Pipelines', icon: CircleCIIcon },
    { name: 'Machine Learning', icon: PyTorchIcon },
    { name: 'Langchain', icon: ClaudeAIIcon },
    { name: 'GraphQL', icon: GraphQLIcon },
    { name: 'React Native', icon: ReactIcon },
    { name: 'AWS', icon: AWSIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Git', icon: GitIcon },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerChildren}
      id="tech-stack"
      className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={slideUp} className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">My Tech Stack</motion.h2>
        <motion.div variants={staggerChildren} className="flex flex-wrap justify-center gap-4">
          {techStack && techStack.map((tech) => (
            <TechStackItem key={tech.name} icon={tech.icon} name={tech.name} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TechStackSection