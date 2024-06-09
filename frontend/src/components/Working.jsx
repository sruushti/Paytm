import React, { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import '../style/Working.css'

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: {label: 'Start'},
        position: {x: 250, y: 25}
    }, {
        id: '2',
        data: {label: <h3>Signup</h3>},
        position: {x: 100, y: 175}
    }, {
        id: '3',
        data: {label: <h3>Signin</h3>},
        position: {x: 400, y: 175} 
    }, {
        id: '4',
        data: { label: 'User' },
        position: { x: 250, y: 325 }
      }, {
        id: '5',
        data: { label: 'Balance Review' },
        position: { x: 470, y: 325 }
      }, {
        id: '6',
        type: 'output',
        data: { label: 'Payment' },
        position: { x: 250, y: 475 }
      }
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e4-5', source: '4', target: '5', animated: true },
    { id: 'e4-6', source: '4', target: '6', animated: true }
];

function Working() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges)

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ReactFlow 
                nodes = {nodes}
                edges = {edges}
                onNodeChange = {onNodesChange}
                onEdgesChange = {onEdgesChange}
            />
        </div>
    );
}

export default Working;