"use client";

import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge'; // Assuming Badge component is suitable
import type { SkillNode as CustomSkillNodeData } from '@/lib/skills-graph-data'; // Renaming to avoid conflict

// Define a mapping for category colors (Tailwind CSS classes - opaque for better contrast)
const categoryColors: Record<CustomSkillNodeData['category'], string> = {
  language: 'bg-sky-500 border-sky-600',
  frontend: 'bg-emerald-500 border-emerald-600',
  backend: 'bg-amber-600 border-amber-700', // Darker amber for white text
  database: 'bg-rose-500 border-rose-600',
  devops: 'bg-indigo-500 border-indigo-600',
  tools: 'bg-slate-600 border-slate-700',   // Darker slate for white text
  ai: 'bg-purple-500 border-purple-600',
  all: 'bg-gray-600 border-gray-700', 
};

const CustomSkillNode: React.FC<NodeProps<CustomSkillNodeData>> = ({ data, selected }) => {
  const { label, category, icon: Icon } = data;
  const colorClass = categoryColors[category] || categoryColors.all;

  return (
    <motion.div
      className={`custom-skill-node p-3 rounded-lg shadow-lg text-white min-w-[130px] text-center border-2 ${colorClass} ${selected ? 'ring-2 ring-offset-1 ring-yellow-400 dark:ring-offset-gray-800' : ''}`}
      whileHover={{ scale: 1.08 }} // Slightly reduced hover scale
      transition={{ type: 'spring', stiffness: 300, damping: 12 }}
    >
      <Handle type="target" position={Position.Top} className="!bg-slate-300 dark:!bg-slate-600 !w-2 !h-2" />
      <div className="flex flex-col items-center gap-1.5"> {/* Increased gap slightly */}
        {Icon && (
          <div className="p-1 rounded-full bg-white/25"> {/* Slightly more opaque icon bg */}
            <Icon className="w-6 h-6" /> {/* Slightly larger icon */}
          </div>
        )}
        <span className="text-sm font-medium block truncate max-w-full px-1">{label}</span> {/* Increased font size, added padding for truncate */}
      </div>
      <Badge 
        variant="secondary" 
        className="mt-2 text-xs capitalize bg-black/25 text-white/90 border-none px-1.5 py-0.5" // Adjusted badge style
      >
        {category}
      </Badge>
      <Handle type="source" position={Position.Bottom} className="!bg-slate-300 dark:!bg-slate-600 !w-2 !h-2" />
    </motion.div>
  );
};

export default React.memo(CustomSkillNode);
