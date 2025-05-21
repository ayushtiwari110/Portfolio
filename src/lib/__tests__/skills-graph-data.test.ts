import { generateSkillsGraphData, TechItem, Category } from '../skills-graph-data'; // Adjust path if needed
import { CIcon, ReactIcon, NodeJsIcon } from 'developer-icons'; // Assuming developer-icons is available

// Mock categories if they are not directly exported or needed for complex logic not tested here
const mockCategories = {
  all: "All",
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database", // Added for completeness if any test items use it
  devops: "DevOps",     // Added
  tools: "Tools",       // Added
  ai: "AI & ML",        // Added
};


describe('generateSkillsGraphData', () => {
  const mockTechStack: TechItem[] = [
    { name: 'C', icon: CIcon, category: 'language' },
    { name: 'React.js', icon: ReactIcon, category: 'frontend' },
    { name: 'Node.js', icon: NodeJsIcon, category: 'backend' },
    { name: 'Express.js', icon: NodeJsIcon, category: 'backend' }, // Same category as Node.js
  ];

  it('should generate correct nodes from techItems', () => {
    const { nodes } = generateSkillsGraphData(mockTechStack);
    expect(nodes).toHaveLength(mockTechStack.length);

    mockTechStack.forEach((item, index) => {
      const expectedId = item.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
      expect(nodes[index]).toEqual(
        expect.objectContaining({
          id: expectedId,
          label: item.name,
          category: item.category,
          icon: item.icon,
        })
      );
    });
  });

  it('should generate correct node IDs', () => {
    const { nodes } = generateSkillsGraphData([{ name: 'Test Skill.js', icon: ReactIcon, category: 'frontend' }]);
    expect(nodes[0].id).toBe('test-skilljs');
  });

  it('should handle empty techStack gracefully', () => {
    const { nodes, edges } = generateSkillsGraphData([]);
    expect(nodes).toHaveLength(0);
    expect(edges).toHaveLength(0);
  });

  describe('Edge Generation', () => {
    const techStackForEdges: TechItem[] = [
      { name: 'React.js', icon: ReactIcon, category: 'frontend' },
      { name: 'Next.js', icon: ReactIcon, category: 'frontend' }, // Same category
      { name: 'Node.js', icon: NodeJsIcon, category: 'backend' },
      { name: 'TypeScript', icon: ReactIcon, category: 'language' },
    ];
    // Expected explicit pairings from the function:
    // ('React.js', 'Node.js')
    // ('Next.js', 'React.js')
    // ('TypeScript', 'React.js')
    // ('TypeScript', 'Node.js')

    // Expected intra-category (frontend):
    // ('React.js', 'Next.js') -> first skill in category to others

    const { nodes, edges } = generateSkillsGraphData(techStackForEdges);

    it('should generate the correct number of edges (intra-category and explicit)', () => {
      // Intra-category: React.js -> Next.js (1)
      // Explicit:
      // 1. React.js - Node.js
      // 2. Next.js - React.js (duplicate of intra-category if order doesn't matter, but IDs are source-target)
      //    The code adds `nextjs-reactjs` from explicit, and `reactjs-nextjs` from intra-category.
      //    The addEdge function prevents exact duplicates and reverse duplicates. So only one of these will be added.
      // 3. TypeScript - React.js
      // 4. TypeScript - Node.js
      // Total expected: 1 (intra) + 3 new (explicit, one is a duplicate direction) = 4 unique edges
      // Let's trace:
      // 1. Intra-category ('frontend'): ('React.js', 'Next.js') -> id: "reactjs-nextjs"
      // Explicit pairs:
      // 2. ('React.js', 'Node.js') -> id: "reactjs-nodejs"
      // 3. ('Next.js', 'React.js') -> id: "nextjs-reactjs". This is fine, edgeSet handles "reactjs-nextjs" vs "nextjs-reactjs" as same.
      //    The current addEdge implementation adds `edgeId1` and `edgeId2` to `edgeSet`.
      //    So if "reactjs-nextjs" is added, "nextjs-reactjs" won't be.
      //    Let's assume intra-category runs first: "reactjs-nextjs" is added.
      //    Then explicit "nextjs-reactjs" is attempted, it will be skipped.
      // 4. ('TypeScript', 'React.js') -> id: "typescript-reactjs"
      // 5. ('TypeScript', 'Node.js') -> id: "typescript-nodejs"
      // So, 4 edges.
      expect(edges).toHaveLength(4);
    });

    it('should ensure all edge sources and targets reference existing node IDs', () => {
      const nodeIds = new Set(nodes.map(n => n.id));
      edges.forEach(edge => {
        expect(nodeIds.has(edge.source)).toBe(true);
        expect(nodeIds.has(edge.target)).toBe(true);
      });
    });

    it('should ensure all edge IDs are unique', () => {
      const edgeIds = new Set(edges.map(e => e.id));
      expect(edgeIds.size).toBe(edges.length);
    });

    it('should create intra-category edges', () => {
      const reactNodeId = 'reactjs';
      const nextNodeId = 'nextjs';
      // Expect edge between reactjs and nextjs (from frontend category)
      const intraCategoryEdge = edges.find(
        edge => (edge.source === reactNodeId && edge.target === nextNodeId) ||
                (edge.source === nextNodeId && edge.target === reactNodeId)
      );
      expect(intraCategoryEdge).toBeDefined();
      if (intraCategoryEdge) {
         expect(intraCategoryEdge.label).toContain('Frontend connection'); // Based on categories[catKey]
      }
    });

    it('should create specified explicit edges if nodes exist', () => {
      const reactNodeId = 'reactjs';
      const nodejsNodeId = 'nodejs';
      const typescriptNodeId = 'typescript';

      expect(edges.find(e => e.id === `${reactNodeId}-${nodejsNodeId}` || e.id === `${nodejsNodeId}-${reactNodeId}`)).toBeDefined();
      expect(edges.find(e => e.id === `${typescriptNodeId}-${reactNodeId}` || e.id === `${reactNodeId}-${typescriptNodeId}`)).toBeDefined();
      expect(edges.find(e => e.id === `${typescriptNodeId}-${nodejsNodeId}` || e.id === `${nodejsNodeId}-${typescriptNodeId}`)).toBeDefined();
    });
    
    it('should not create edges if one of the nodes does not exist', () => {
        const customTechStack: TechItem[] = [
            { name: 'OnlySkill', icon: ReactIcon, category: 'frontend' },
            // No 'PairedSkill'
        ];
        // generateSkillsGraphData has hardcoded edges like ('React.js', 'Node.js')
        // If these nodes are not in customTechStack, their edges should not be created.
        // This test relies on the global techStack not being used, but the input techItems.
        // The current implementation of generateSkillsGraphData *always* uses the globally imported techStack for explicit pairings.
        // This needs to be addressed in generateSkillsGraphData or the test needs to be aware of it.
        // For now, this test will likely fail or be incorrect due to that.
        // To fix, generateSkillsGraphData should only consider nodes present in its `techItems` input for explicit pairs.

        // Re-checking the code: `addEdge` checks if nodes exist in the *generated* nodes list from `techItems`. So it should be fine.
        const { edges: customEdges } = generateSkillsGraphData(customTechStack);
        
        // Check that none of the globally common pairings are present if their nodes aren't.
        expect(customEdges.find(e => e.label === 'Full-stack')).toBeUndefined(); // e.g., React.js - Node.js
    });
  });
});
