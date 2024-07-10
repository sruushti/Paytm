import React from 'react';
import ReactFlow from 'react-flow-renderer';

const SignupFlow = () => {
  // Define elements for React Flow diagram
  const elements = [
    { id: 'node1', type: 'input', data: { label: 'Start' }, position: { x: 100, y: 100 } },
    { id: 'node2', type: 'default', data: { label: 'Step 2' }, position: { x: 250, y: 100 } },
    { id: 'edge1', source: 'node1', target: 'node2', animated: true },
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        elements={elements}
        style={{ width: '100%', height: '100%' }}
        zoomOnScroll={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={true}
      />
    </div>
  );
};

export default SignupFlow;
