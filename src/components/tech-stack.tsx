"use client"

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactFlowProvider } from 'reactflow'; // Import ReactFlowProvider
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ReactIcon, NextJsIcon, NodeJsIcon, JavaScriptIcon, JavaIcon, TypeScriptIcon, MongoDBIcon, PrismaIcon, MySQLIcon, JestIcon, FigmaIcon, PythonIcon, CPlusPlusIcon, CircleCIIcon, PyTorchIcon, ClaudeAIIcon, GraphQLIcon, AWSIcon, DockerIcon, GitIcon, CIcon, ExpressJsLightIcon, StorybookIcon, ReactQueryIcon, ReactRouterIcon, ReduxIcon, ESLintIcon, FirebaseIcon, PrettierIcon, PostmanIcon, TailwindCSSIcon, ShadcnUIIcon, StreamIcon, SupabaseIcon, SwaggerIcon, VisualStudioCodeIcon, ZodIcon } from 'developer-icons'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SkillsGraphModal from './skills-graph-modal'; // Import the modal
import { generateSkillsGraphData } from '@/lib/skills-graph-data'; // Import the graph data

export const categories = {
  all: "All",
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "DevOps",
  tools: "Tools",
  ai: "AI & ML",
} as const

export type Category = keyof typeof categories

export interface TechItem {
  name: string
  icon: React.ElementType
  category: Category
}

export const techStack: TechItem[] = [
  { name: 'C', icon: CIcon, category: 'language' },
  { name: 'C++', icon: CPlusPlusIcon, category: 'language' },
  { name: 'Java', icon: JavaIcon, category: 'language' },
  { name: 'Python', icon: PythonIcon, category: 'language' },
  { name: 'TypeScript', icon: TypeScriptIcon, category: 'language' },
  { name: 'JavaScript', icon: JavaScriptIcon, category: 'language' },
  { name: 'React.js', icon: ReactIcon, category: 'frontend' },
  { name: 'React Native', icon: ReactIcon, category: 'frontend' },
  { name: 'React Query', icon: ReactQueryIcon, category: 'frontend' },
  { name: 'React Router', icon: ReactRouterIcon, category: 'frontend' },
  { name: 'Redux', icon: ReduxIcon, category: 'frontend' },
  { name: 'Tailwind CSS', icon: TailwindCSSIcon, category: 'frontend' },
  { name: 'Shadcn UI', icon: ShadcnUIIcon, category: 'frontend' },
  { name: 'Node.js', icon: NodeJsIcon, category: 'backend' },
  { name: 'Next.js', icon: NextJsIcon, category: 'frontend' },
  { name: 'Express.js', icon: ExpressJsLightIcon, category: 'backend' },
  { name: 'MongoDB', icon: MongoDBIcon, category: 'database' },
  { name: 'SQL', icon: MySQLIcon, category: 'database' },
  { name: 'Prisma ORM', icon: PrismaIcon, category: 'database' },
  { name: 'Firebase', icon: FirebaseIcon, category: 'database' },
  { name: 'Supabase', icon: SupabaseIcon, category: 'database' },
  { name: 'Stream', icon: StreamIcon, category: 'backend' },
  { name: 'Jest', icon: JestIcon, category: 'tools' },
  { name: 'Zod', icon: ZodIcon, category: 'tools' },
  { name: 'StoryBook', icon: StorybookIcon, category: 'tools' },
  { name: 'CI/CD', icon: CircleCIIcon, category: 'devops' },
  { name: 'ESLint', icon: ESLintIcon, category: 'tools' },
  { name: 'Prettier', icon: PrettierIcon, category: 'tools' },
  { name: 'Postman', icon: PostmanIcon, category: 'tools' },
  { name: 'Swagger', icon: SwaggerIcon, category: 'tools' },
  { name: 'PyTorch', icon: PyTorchIcon, category: 'ai' },
  { name: 'Langchain', icon: ClaudeAIIcon, category: 'ai' },
  { name: 'GraphQL', icon: GraphQLIcon, category: 'backend' },
  { name: 'AWS', icon: AWSIcon, category: 'devops' },
  { name: 'Docker', icon: DockerIcon, category: 'devops' },
  { name: 'Figma', icon: FigmaIcon, category: 'tools' },
  { name: 'VS Code', icon: VisualStudioCodeIcon, category: 'tools' },
  { name: 'Git', icon: GitIcon, category: 'tools' },
]

const skillsGraphData = generateSkillsGraphData(techStack, categories);

const MOBILE_INITIAL_ITEMS = 8

const TechStackItem = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <Card className="flex items-center gap-2 px-3 py-2 hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border border-border/50">
        <div className="p-1.5 rounded-full bg-primary/10 dark:bg-primary/20">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm font-medium">{name}</span>
      </Card>
    </motion.div>
  )
}

const FilterButton = ({ 
  label,
  isActive,
  onClick,
  count 
}: { 
  category: string
  label: string
  isActive: boolean
  onClick: () => void
  count: number
}) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className="rounded-full"
    >
      {label}
      <Badge variant="secondary" className="ml-2 bg-primary/20">
        {count}
      </Badge>
    </Button>
  )
}

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isSkillsGraphModalOpen, setIsSkillsGraphModalOpen] = useState(false)

  // Check for mobile view on mount and window resize
  useState(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    
    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    return () => window.removeEventListener('resize', checkMobileView)
  })

  const toggleSkillsGraphModal = () => {
    setIsSkillsGraphModalOpen(!isSkillsGraphModalOpen)
  }

  const filteredTechStack = useMemo(() => {
    let filtered = techStack

    if (activeCategory !== 'all') {
      filtered = filtered.filter(tech => tech.category === activeCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(tech => 
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        categories[tech.category].toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  const displayedItems = useMemo(() => {
    if (!isMobileView || isExpanded || searchQuery) {
      return filteredTechStack
    }
    return filteredTechStack.slice(0, MOBILE_INITIAL_ITEMS)
  }, [filteredTechStack, isMobileView, isExpanded, searchQuery])

  const shouldShowViewMore = isMobileView && !searchQuery && filteredTechStack.length > MOBILE_INITIAL_ITEMS

  return (
    <section className="py-16 bg-background" id='tech-stack'>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 relative">
          <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            My Tech Stack
          </h2>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleSkillsGraphModal}
            className="absolute top-0 right-0 mt-2 mr-2"
          >
            TLDR
          </Button>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-6">
          {/* Horizontal scrolling filter buttons on mobile */}
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-2 md:justify-center min-w-max">
              {Object.entries(categories).map(([key, value]) => (
                <FilterButton
                  key={key}
                  category={key}
                  label={value}
                  isActive={activeCategory === key}
                  onClick={() => {
                    setActiveCategory(key as Category)
                    setIsExpanded(false)
                  }}
                  count={key === 'all' 
                    ? techStack.length
                    : techStack.filter(tech => tech.category === key).length
                  }
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setIsExpanded(true)
              }}
              className="w-full max-w-md mx-auto block px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
            >
              {displayedItems.map((tech) => (
                <TechStackItem
                  key={tech.name}
                  icon={tech.icon}
                  name={tech.name}
                />
              ))}
              {filteredTechStack.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-6 text-muted-foreground"
                >
                  No technologies found matching your criteria
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {shouldShowViewMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-4"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-full"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    View More
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          )}

          {shouldShowViewMore && (
            <p className="text-center text-sm text-muted-foreground">
              Showing {displayedItems.length} of {filteredTechStack.length} technologies
            </p>
          )}
        </div>
      </div>
      <ReactFlowProvider> {/* Wrap SkillsGraphModal with ReactFlowProvider */}
        <SkillsGraphModal 
          isOpen={isSkillsGraphModalOpen}
          onClose={toggleSkillsGraphModal}
          graphData={skillsGraphData}
        />
      </ReactFlowProvider>
    </section>
  )
}

export default TechStackSection