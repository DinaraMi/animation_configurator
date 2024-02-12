import React, { useState } from 'react';
import './RightPanel.css';

function RightPanel() {
  const [animationConfig, setAnimationConfig] = useState({
    x: 0,
    y: 0,
    opacity: 0,
    scale: 2,
    blur: 0,
    speed: 1,
    delay: 0,
    easing: 'ease',
    replay: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnimationConfig({ ...animationConfig, [name]: value });
  };

  return (
    <div className="rightPanel">
      <div className="rightPanel__container">
        <div className="rightPanel__controls">
          <div className="rightPanel__control">
            <label htmlFor="x">X</label>
            <input type="range" min="-100" max="100" value={animationConfig.x} name="x" onChange={handleInputChange} />
            <span>{animationConfig.x}</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="y">Y</label>
            <input type="range" min="-100" max="100" value={animationConfig.y} name="y" onChange={handleInputChange} />
            <span>{animationConfig.y}</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="opacity">Opacity</label>
            <input type="range" min="0" max="100" value={animationConfig.opacity} name="opacity" onChange={handleInputChange} />
            <span>{animationConfig.opacity}%</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="scale">Scale</label>
            <input type="range" min="0" max="100" value={animationConfig.scale} name="scale" onChange={handleInputChange} />
            <span>{animationConfig.scale}</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="blur">Blur</label>
            <input type="range" min="0" max="10" value={animationConfig.blur} name="blur" onChange={handleInputChange} />
            <span>{animationConfig.blur}</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="speed">Speed</label>
            <input type="range" min="0" max="10" value={animationConfig.speed} name="speed" onChange={handleInputChange} />
            <span>{animationConfig.speed}s</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="delay">Delay</label>
            <input type="range" min="0" max="10" value={animationConfig.delay} name="delay" onChange={handleInputChange} />
            <span>{animationConfig.delay}s</span>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="easing">Easing</label>
            <select name="easing" value={animationConfig.easing} onChange={handleInputChange}>
              <option value="ease">Ease</option>
              <option value="ease-in">Ease In</option>
              <option value="ease-out">Ease Out</option>
              <option value="ease-in-out">Ease In-Out</option>
            </select>
          </div>
          <div className="rightPanel__control">
            <label htmlFor="replay">Replay:</label>
            <input type="checkbox" name="replay" checked={animationConfig.replay} onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
