import React, { useState } from 'react';
import '../styles/editor.scss';
import DrawingPanel from './DrawingPanel';
import { CirclePicker } from 'react-color';

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('start drawing');
  const [selectedColor, setColor] = useState('#f44336');

  function initializeDrawingPanel() {
    setHideDrawingPanel((hideDrawingPanel) => !hideDrawingPanel);
    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing');
  }

  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div id='editor'>
      <h1>
        <span style={{ color: '#ff0000' }}>P</span>
        <span style={{ color: '#ff7f00' }}>i</span>
        <span style={{ color: '#ffff00' }}>x</span>
        <span style={{ color: '#00ff00' }}>e</span>
        <span style={{ color: '#00ffff' }}>l</span>
        <span style={{ color: '#0000ff' }}>-</span>
        <span style={{ color: '#8b00ff' }}>A</span>
        <span style={{ color: ':#ff0000' }}>r</span>
        <span style={{ color: '#0080ff' }}>t</span>
      </h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id='options'>
          <div className='option'>
            <input
              type='number'
              className='panelInput'
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className='option'>
            <input
              type='number'
              className='panelInput'
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      <button onClick={initializeDrawingPanel} className='button'>
        {buttonText}
      </button>
      {!hideDrawingPanel && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}
      {!hideDrawingPanel && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
};

export default Editor;
