import React, { useRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import '../styles/drawingPanel.scss';
import Row from './Row';

const DrawingPanel = ({ width, height, selectedColor }) => {
  const panelRef = useRef();
  let panel = [];
  for (let i = 0; i < height; i++) {
    panel.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id='drawingPanel'>
      <div id='pixels' ref={panelRef}>
        {panel}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className='button'>
        Export as PNG
      </button>
    </div>
  );
};

export default DrawingPanel;
