import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomSkillNode from '../custom-skill-node'; // Adjust path
import type { NodeProps } from 'reactflow';
import type { SkillNode as CustomSkillNodeData } from '../../lib/skills-graph-data'; // Adjust path

// Mock Handle from react-flow
jest.mock('reactflow', () => {
  const originalModule = jest.requireActual('reactflow');
  return {
    ...originalModule,
    Handle: jest.fn(() => <div data-testid="mock-handle" />),
    Position: { Top: 'top', Bottom: 'bottom' }, // Mock Position if needed by Handle usage
  };
});

// Mock an icon component
const MockIcon = () => <svg data-testid="mock-icon" />;

describe('CustomSkillNode', () => {
  const mockNodeData: CustomSkillNodeData['data'] = {
    label: 'Test Skill',
    category: 'frontend',
    icon: MockIcon,
  };

  const mockNodeProps: NodeProps<CustomSkillNodeData['data']> = {
    id: 'test-node',
    type: 'customSkill',
    selected: false,
    dragging: false,
    zIndex: 0,
    isConnectable: true,
    xPos: 0,
    yPos: 0,
    data: mockNodeData,
  };

  it('renders the label correctly', () => {
    render(<CustomSkillNode {...mockNodeProps} />);
    expect(screen.getByText('Test Skill')).toBeInTheDocument();
  });

  it('renders the category correctly in a badge', () => {
    render(<CustomSkillNode {...mockNodeProps} />);
    // The badge text is the category name, capitalized
    expect(screen.getByText(mockNodeData.category, { exact: false })).toBeInTheDocument(); // case-insensitive partial match
  });

  it('renders the icon component', () => {
    render(<CustomSkillNode {...mockNodeProps} />);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('applies the correct category color class', () => {
    render(<CustomSkillNode {...mockNodeProps} />);
    // From categoryColors map: frontend: 'bg-emerald-500 border-emerald-600'
    // The component's root div will have these classes.
    const nodeDiv = screen.getByText('Test Skill').closest('div.custom-skill-node');
    expect(nodeDiv).toHaveClass('bg-emerald-500');
    expect(nodeDiv).toHaveClass('border-emerald-600');
  });
  
  it('applies a fallback color class if category is not in map', () => {
    const propsWithUnknownCategory: NodeProps<CustomSkillNodeData['data']> = {
      ...mockNodeProps,
      data: {
        ...mockNodeData,
        category: 'unknownCategory' as any, // Cast to any to bypass type checking for test
      },
    };
    render(<CustomSkillNode {...propsWithUnknownCategory} />);
    // Fallback: all: 'bg-gray-600 border-gray-700'
    const nodeDiv = screen.getByText('Test Skill').closest('div.custom-skill-node');
    expect(nodeDiv).toHaveClass('bg-gray-600');
    expect(nodeDiv).toHaveClass('border-gray-700');
  });


  it('applies selection classes when selected is true', () => {
    const selectedProps: NodeProps<CustomSkillNodeData['data']> = {
      ...mockNodeProps,
      selected: true,
    };
    render(<CustomSkillNode {...selectedProps} />);
    const nodeDiv = screen.getByText('Test Skill').closest('div.custom-skill-node');
    expect(nodeDiv).toHaveClass('ring-2', 'ring-offset-1', 'ring-yellow-400', 'dark:ring-offset-gray-800');
  });

  it('does not apply selection classes when selected is false', () => {
    render(<CustomSkillNode {...mockNodeProps} />); // selected is false by default in mockNodeProps
    const nodeDiv = screen.getByText('Test Skill').closest('div.custom-skill-node');
    expect(nodeDiv).not.toHaveClass('ring-2');
    expect(nodeDiv).not.toHaveClass('ring-yellow-400');
  });

  it('renders Handle components', () => {
    render(<CustomSkillNode {...mockNodeProps} />);
    expect(screen.getAllByTestId('mock-handle')).toHaveLength(2); // One target, one source
  });
});
