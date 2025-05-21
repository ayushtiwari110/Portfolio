import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechStackSection from '../tech-stack'; // Adjust path as necessary
import { initialSkillsGraph } from '../../lib/skills-graph-data'; // Adjust path

// Mock SkillsGraphModal
const mockOnClose = jest.fn();
let receivedGraphData: any = null;
let receivedIsOpen: boolean | null = null;

jest.mock('../skills-graph-modal', () => ({
  __esModule: true,
  default: jest.fn((props) => {
    // Capture props for assertion
    receivedGraphData = props.graphData;
    receivedIsOpen = props.isOpen;
    mockOnClose.mockImplementation(props.onClose); // Capture onClose to simulate modal closing

    if (!props.isOpen) {
      return null;
    }
    return (
      <div data-testid="mock-skills-graph-modal" role="dialog">
        <h2>Skills Relationship Graph (TLDR)</h2>
        <p>Nodes: {props.graphData.nodes.length}</p>
        <p>Edges: {props.graphData.edges.length}</p>
        <button aria-label="Close modal" onClick={props.onClose}>Close Mock Modal</button>
        <div data-testid="mock-modal-backdrop" onClick={props.onClose}></div>
      </div>
    );
  }),
}));

// Mock ReactFlowProvider from reactflow
jest.mock('reactflow', () => {
  const originalModule = jest.requireActual('reactflow');
  return {
    ...originalModule,
    ReactFlowProvider: jest.fn(({ children }) => <>{children}</>), // Simple pass-through
    // Mock other reactflow components if they were directly used by TechStackSection,
    // but they are not. They are encapsulated within SkillsGraphModal.
  };
});


// Mock IntersectionObserver for Framer Motion visibility checks if needed by TechStackSection itself
// (though it's more likely needed by sub-components like the modal)
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  });
  window.IntersectionObserver = mockIntersectionObserver;
  jest.clearAllMocks(); // Clear mocks before each test
  receivedGraphData = null; // Reset captured props
  receivedIsOpen = null;
});


describe('TechStackSection Integration with SkillsGraphModal', () => {
  it('should initially not show the SkillsGraphModal', () => {
    render(<TechStackSection />);
    expect(screen.queryByTestId('mock-skills-graph-modal')).not.toBeInTheDocument();
  });

  it('should open the SkillsGraphModal when "TLDR" button is clicked, and pass correct data', () => {
    render(<TechStackSection />);
    
    const tldrButton = screen.getByRole('button', { name: 'TLDR' });
    expect(tldrButton).toBeInTheDocument();

    fireEvent.click(tldrButton);

    expect(screen.getByTestId('mock-skills-graph-modal')).toBeInTheDocument();
    expect(screen.getByText('Skills Relationship Graph (TLDR)')).toBeInTheDocument();
    
    // Check props passed to the mocked modal
    expect(receivedIsOpen).toBe(true);
    expect(receivedGraphData).toEqual(initialSkillsGraph);
    expect(screen.getByText(`Nodes: ${initialSkillsGraph.nodes.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Edges: ${initialSkillsGraph.edges.length}`)).toBeInTheDocument();
  });

  it('should close the SkillsGraphModal when its close button is clicked', () => {
    render(<TechStackSection />);
    
    const tldrButton = screen.getByRole('button', { name: 'TLDR' });
    fireEvent.click(tldrButton); // Open the modal

    expect(screen.getByTestId('mock-skills-graph-modal')).toBeInTheDocument();

    // Simulate the modal calling its onClose prop (e.g., by clicking its mocked close button)
    // The mockOnClose function is now tied to the props.onClose of the mocked modal.
    const mockModalCloseButton = screen.getByRole('button', { name: 'Close Mock Modal' });
    fireEvent.click(mockModalCloseButton);
    
    expect(screen.queryByTestId('mock-skills-graph-modal')).not.toBeInTheDocument();
    expect(receivedIsOpen).toBe(false); // Check the last captured state of isOpen
  });

  it('should close the SkillsGraphModal when its backdrop is clicked (simulated)', () => {
    render(<TechStackSection />);
    
    const tldrButton = screen.getByRole('button', { name: 'TLDR' });
    fireEvent.click(tldrButton); // Open the modal

    expect(screen.getByTestId('mock-skills-graph-modal')).toBeInTheDocument();

    const mockModalBackdrop = screen.getByTestId('mock-modal-backdrop');
    fireEvent.click(mockModalBackdrop);
    
    expect(screen.queryByTestId('mock-skills-graph-modal')).not.toBeInTheDocument();
    expect(receivedIsOpen).toBe(false);
  });
});
