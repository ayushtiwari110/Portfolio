"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background, Node, Edge, useReactFlow } from 'reactflow';
import 'reactflow/dist/style.css';
import type { SkillsGraphData, SkillNode as OriginalSkillNode, SkillEdge as OriginalSkillEdge } from "@/lib/skills-graph-data";
import CustomSkillNode from './custom-skill-node'; // Import the custom node

const nodeTypes = {
  customSkill: CustomSkillNode,
};

const defaultEdgeStyle = {
  strokeWidth: 1.5,
  stroke: '#94a3b8', // slate-400
};

const hoveredEdgeStyle = {
  strokeWidth: 2.5,
  stroke: '#3b82f6', // blue-500
};

interface SkillsGraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  graphData: SkillsGraphData;
}

const SkillsGraphModal = ({ isOpen, onClose, graphData }: SkillsGraphModalProps) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [hoveredEdgeIds, setHoveredEdgeIds] = useState<string[]>([]);
  const { fitView } = useReactFlow();

  // Transform SkillNode to ReactFlow Node
  const rfNodes: Node[] = useMemo(() => {
    const nodesPerRow = 5; // Adjust for better spacing with custom nodes
    const xSpacing = 200;  // Increased spacing
    const ySpacing = 150;  // Increased spacing
    return graphData.nodes.map((node: OriginalSkillNode, index: number) => ({
      id: node.id,
      type: 'customSkill', // Use custom node type
      position: { 
        x: (index % nodesPerRow) * xSpacing, 
        y: Math.floor(index / nodesPerRow) * ySpacing 
      }, 
      data: { label: node.label, category: node.category, icon: node.icon, isHovered: hoveredNodeId === node.id },
    }));
  }, [graphData.nodes, hoveredNodeId]);

  // Transform SkillEdge to ReactFlow Edge
  const rfEdges: Edge[] = useMemo(() => {
    return graphData.edges.map((edge: OriginalSkillEdge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      animated: edge.animated ?? true, // Default to animated edges
      style: hoveredEdgeIds.includes(edge.id) ? hoveredEdgeStyle : defaultEdgeStyle,
      zIndex: hoveredEdgeIds.includes(edge.id) ? 10 : 0, // Bring hovered edges to front
    }));
  }, [graphData.edges, hoveredEdgeIds]);
  
  const onNodeMouseEnter = (_event: React.MouseEvent, node: Node) => {
    setHoveredNodeId(node.id);
    const connectedEdges = graphData.edges
      .filter(edge => edge.source === node.id || edge.target === node.id)
      .map(edge => edge.id);
    setHoveredEdgeIds(connectedEdges);
  };

  const onNodeMouseLeave = () => {
    setHoveredNodeId(null);
    setHoveredEdgeIds([]);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 500 } }
  };

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      // Fit view when modal opens or graph data changes
      if (graphData.nodes.length > 0) {
        setTimeout(() => fitView({ duration: 400, padding: 0.15 }), 100);
      }
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen, graphData.nodes, fitView]);

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4" // Matched tldr-modal
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-2xl shadow-xl max-h-[80vh] relative overflow-hidden flex flex-col"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Skills Relationship Graph (TLDR)
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Content - React Flow Graph */}
            <div className="flex-grow h-full">
              <ReactFlow
                nodes={rfNodes}
                edges={rfEdges}
                nodeTypes={nodeTypes}
                onNodeMouseEnter={onNodeMouseEnter}
                onNodeMouseLeave={onNodeMouseLeave}
                defaultEdgeOptions={{ animated: true, style: defaultEdgeStyle }}
                fitView
                minZoom={0.3} 
                className="bg-gray-50 dark:bg-gray-850" // Slightly different from modal body for depth; dark:bg-gray-850 is a conceptual value, using dark:bg-opacity-50 on gray-900 or a darker gray
              >
                <Controls className="!bg-gray-200 dark:!bg-gray-700 !border-gray-300 dark:!border-gray-600 rounded-md !text-gray-700 dark:!text-gray-200" />
                <MiniMap 
                  nodeStrokeWidth={3} 
                  zoomable 
                  pannable 
                  className="!bg-gray-100 dark:!bg-gray-700/70 border border-gray-300 dark:border-gray-600 rounded-md backdrop-blur-sm" // Added backdrop blur to minimap
                  nodeColor={(node: Node) => {
                    const categoryColors: Record<string, string> = { // Kept as is, seems fine
                      language: '#38bdf8', 
                      frontend: '#34d399', 
                      backend: '#f59e0b',  
                      database: '#f43f5e', 
                      devops: '#818cf8',   
                      tools: '#94a3b8',    
                      ai: '#a78bfa',       
                      all: '#9ca3af',      
                    };
                    return categoryColors[node.data.category] || categoryColors.all;
                  }}
                />
                {/* Using Tailwind classes for themeable background pattern */}
                <Background 
                  gap={20} 
                  size={1.5} 
                  className="[&>path]:stroke-gray-300 dark:[&>path]:stroke-gray-700" // Target path element for color
                />
              </ReactFlow>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillsGraphModal;
