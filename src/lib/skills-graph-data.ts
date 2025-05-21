// src/lib/skills-graph-data.ts

import { techStack, categories } from '@/components/tech-stack'; // Assuming this path is resolvable by TS/Webpack alias
import type { TechItem, Category } from '@/components/tech-stack'; // Import types

// Define TypeScript interfaces for the graph data structure
export interface SkillNode {
  id: string;
  label: string;
  category: Category; // Use the imported Category type
  icon?: React.ElementType; // Use React.ElementType for icon components
  size?: number;
  color?: string; // Will be derived from category later if needed
}

export interface SkillEdge {
  id: string;
  source: string; // ID of the source SkillNode
  target: string; // ID of the target SkillNode
  label?: string;
  animated?: boolean;
}

export interface SkillsGraphData {
  nodes: SkillNode[];
  edges: SkillEdge[];
}

const generateNodeId = (name: string): string => name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');

export const generateSkillsGraphData = (techItems: TechItem[]): SkillsGraphData => {
  const nodes: SkillNode[] = techItems.map((item) => ({
    id: generateNodeId(item.name),
    label: item.name,
    category: item.category,
    icon: item.icon,
    // Add color based on category for better visualization if needed
    // color: categoryColors[item.category], 
  }));

  const edges: SkillEdge[] = [];
  const edgeSet = new Set<string>(); // To ensure unique edges

  const addEdge = (sourceName: string, targetName: string, label?: string, animated?: boolean) => {
    const sourceId = generateNodeId(sourceName);
    const targetId = generateNodeId(targetName);

    // Ensure both nodes exist
    if (!nodes.find(n => n.id === sourceId) || !nodes.find(n => n.id === targetId)) {
      // console.warn(`Skipping edge: Node not found for ${sourceName} or ${targetName}`);
      return;
    }
    
    const edgeId1 = `${sourceId}-${targetId}`;
    const edgeId2 = `${targetId}-${sourceId}`;

    if (!edgeSet.has(edgeId1) && !edgeSet.has(edgeId2) && sourceId !== targetId) {
      edges.push({
        id: edgeId1,
        source: sourceId,
        target: targetId,
        label,
        animated,
      });
      edgeSet.add(edgeId1);
      edgeSet.add(edgeId2);
    }
  };

  // Intra-category edges
  Object.keys(categories).forEach((categoryKey) => {
    const catKey = categoryKey as Category;
    if (catKey === 'all') return; // Skip 'all' category for edge generation

    const categorySkills = techItems.filter(item => item.category === catKey);
    if (categorySkills.length > 1) {
      const firstSkillInCategory = categorySkills[0];
      for (let i = 1; i < categorySkills.length; i++) {
        addEdge(firstSkillInCategory.name, categorySkills[i].name, `${categories[catKey]} connection`);
      }
      // Optional: connect all skills in a category to each other (can create many edges)
      /*
      for (let i = 0; i < categorySkills.length; i++) {
        for (let j = i + 1; j < categorySkills.length; j++) {
          addEdge(categorySkills[i].name, categorySkills[j].name, `${categories[catKey]} internal`);
        }
      }
      */
    }
  });

  // Explicit common pairings
  addEdge('React.js', 'Node.js', 'Full-stack');
  addEdge('Next.js', 'React.js', 'Framework');
  addEdge('TypeScript', 'React.js', 'Typed JavaScript');
  addEdge('TypeScript', 'Node.js', 'Typed JavaScript');
  // Assuming 'SQL' is a general skill and Prisma can work with it.
  // The actual techStack has 'SQL' and 'Prisma ORM', let's use their exact names.
  addEdge('Prisma ORM', 'SQL', 'ORM for SQL'); 
  addEdge('Prisma ORM', 'MongoDB', 'ORM for MongoDB');
  addEdge('Tailwind CSS', 'React.js', 'Styling');
  addEdge('Express.js', 'Node.js', 'Backend Framework');
  addEdge('Firebase', 'React.js', 'BaaS');
  addEdge('Supabase', 'React.js', 'BaaS');


  return { nodes, edges };
};

// Export a pre-generated graph using the techStack from the component file
export const initialSkillsGraph: SkillsGraphData = generateSkillsGraphData(techStack);

// Export types and function
export type { TechItem, Category };
