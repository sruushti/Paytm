import React from "react";


import ReactFlow, {
  Controls,
  Background
} from "react-flow-renderer";
import defaultElements from "./Nodes";

const Diagram = ({ width, height }) => {

  const [elements, setElements] = React.useState(defaultElements);

  React.useEffect(() => {
    fitView();
  }, [width, height, fitView]);

  return (
    <div style={{ height, width }}>
      <ReactFlow
        elements={elements}
        elementsSelectable={false}
        nodesConnectable={false}
        nodesDraggable={false}
        panOnScroll={false}
        paneMoveable={false}
        onLoad={fitView}
      >
        <Background variant="dots" gap={16} size={1} color="#dddddd" />
        <Controls className="react-flow_controls" showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
