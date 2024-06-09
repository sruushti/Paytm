import React, { useCallback, useState } from 'react';
import ReactFlow,{ReactFlowProvider, useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';
//import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges , useNodesState, useEdgesState} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode.jsx';

import ZoomNode from './ZoomNode.jsx';

import 'reactflow/dist/style.css';
import './index.css';

const snapGrid = [20, 20];
const nodeTypes = {
  zoom: ZoomNode,
  custom: CustomNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'custom',
        data: {label: <h2>Start</h2>},
        position: {x: 350, y: 105}
    }, {
        id: '2',
        type: 'custom',
        data: {label: <h2>Signup</h2> },
        position: {x: 150, y: 205}
    }, {
        id: '3',
        type:'custom',
        data: {label: <h2>Signin</h2>},
        position: {x: 550, y: 205} 
    }, {
        id: '4',
        type: 'custom',
        data: {label: <h2>User</h2>},
        position: { x: 350, y: 305 }
      }, {
        id: '5',
        type: 'custom',
        data: {label: <h2>Balance Review</h2>},
        position: { x: 490, y: 362 }
      }, {
        id: '6',
        type: 'custom',
        data: {label: <h2>Payment</h2>},
        position: { x: 352, y: 425 }
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

    const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

   /* const Working = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
        []
    ); */

    return (
        <ReactFlowProvider style={{width:'100%', height: '100%' }}>
            <ReactFlow 
                nodes = {nodes}
                edges = {edges}
                onNodeChange = {onNodesChange}
                onEdgesChange = {onEdgesChange}
                nodeTypes={nodeTypes} 
                /*nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                snapToGrid={true}
                snapGrid={snapGrid}
                defaultViewport={defaultViewport}
                attributionPosition="top-right" */
                >
                <MiniMap />
                <Controls /> 
                </ReactFlow>
        </ReactFlowProvider>
    );
}

export default Working;