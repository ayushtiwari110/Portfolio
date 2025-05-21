import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsGraphModal from '../skills-graph-modal'; // Adjust path as necessary
import type { SkillsGraphData } from '../../lib/skills-graph-data'; // Adjust path
import { ReactFlowProvider } from 'reactflow'; // Import for wrapping

// Mock React Flow components and hooks
jest.mock('reactflow', () => {
  const originalModule = jest.requireActual('reactflow');
  return {
    ...originalModule,
    ReactFlow: jest.fn(({ nodes, edges }) => (
      <div data-testid="mock-react-flow">
        <div data-testid="nodes-count">{nodes.length}</div>
        <div data-testid="edges-count">{edges.length}</div>
      </div>
    )),
    useReactFlow: jest.fn(() => ({
      fitView: jest.fn(),
    })),
    Controls: jest.fn(() => <div data-testid="mock-controls" />),
    MiniMap: jest.fn(() => <div data-testid="mock-minimap" />),
    Background: jest.fn(() => <div data-testid="mock-background" />),
  };
});

// Mock CustomSkillNode
jest.mock('../custom-skill-node', () => jest.fn(() => <div data-testid="mock-custom-node" />));

const mockGraphData: SkillsGraphData = {
  nodes: [
    { id: '1', label: 'Node 1', category: 'frontend', position: { x: 0, y: 0 }, data: { label: 'Node 1', category: 'frontend' } },
    { id: '2', label: 'Node 2', category: 'backend', position: { x: 0, y: 0 }, data: { label: 'Node 2', category: 'backend' } },
  ],
  edges: [
    { id: 'e1-2', source: '1', target: '2', label: 'Connects' },
  ],
};

// Mock IntersectionObserver for Framer Motion visibility checks if needed
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});


describe('SkillsGraphModal', () => {
  const mockOnClose = jest.fn();

  // Helper to render with ReactFlowProvider
  const renderModal = (isOpen: boolean, graphData: SkillsGraphData = mockGraphData) => {
    return render(
      <ReactFlowProvider>
        <SkillsGraphModal
          isOpen={isOpen}
          onClose={mockOnClose}
          graphData={graphData}
        />
      </ReactFlowProvider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not be in the document when isOpen is false', () => {
    renderModal(false);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should be in the document when isOpen is true', () => {
    renderModal(true);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Skills Relationship Graph (TLDR)')).toBeInTheDocument();
  });

  it('should call onClose when the header close button is clicked', () => {
    renderModal(true);
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when the footer close button is clicked', () => {
    renderModal(true);
    // The footer close button is just text "Close"
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when the backdrop is clicked', () => {
    renderModal(true);
    // The backdrop is the parent div with role 'dialog' in this setup due to AnimatePresence structure
    // Or more accurately, the fixed div that has the onClick={onClose}
    // Let's target the specific motion.div that has the onClick handler.
    // It's the first child of the div that gets mounted by AnimatePresence.
    // This might be fragile. A data-testid on the backdrop div would be better.
    // For now, assuming the structure where the dialog's immediate parent could be it.
    const dialog = screen.getByRole('dialog');
    if (dialog.parentElement) { // This is the motion.div for backdrop
        fireEvent.click(dialog.parentElement);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    } else {
        throw new Error("Dialog parent element not found for backdrop click test");
    }
  });


  it('should render the mocked ReactFlow component with correct node and edge counts', () => {
    renderModal(true);
    expect(screen.getByTestId('mock-react-flow')).toBeInTheDocument();
    expect(screen.getByTestId('nodes-count')).toHaveTextContent(mockGraphData.nodes.length.toString());
    expect(screen.getByTestId('edges-count')).toHaveTextContent(mockGraphData.edges.length.toString());
  });
  
  it('should render mocked Controls, MiniMap, and Background', () => {
    renderModal(true);
    expect(screen.getByTestId('mock-controls')).toBeInTheDocument();
    expect(screen.getByTestId('mock-minimap')).toBeInTheDocument();
    expect(screen.getByTestId('mock-background')).toBeInTheDocument();
  });

  it('should call fitView when opened (useEffect dependency)', () => {
    const mockFitView = jest.fn();
    const ReactFlowActual = jest.requireActual('reactflow');
    ReactFlowActual.useReactFlow = jest.fn(() => ({ fitView: mockFitView }));
    
    // Need to use act for useEffect changes
    act(() => {
      renderModal(true);
    });

    // fitView is called inside a setTimeout, so we need to advance timers
    act(() => {
      jest.advanceTimersByTime(150); // Past the 100ms timeout
    });

    expect(mockFitView).toHaveBeenCalled();
  });
});

// Enable fake timers for fitView test
beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});
