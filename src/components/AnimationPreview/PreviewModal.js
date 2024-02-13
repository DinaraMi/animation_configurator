import React, { useEffect, useRef } from 'react';
import './PreviewModal.css';

function PreviewModal({ isOpen, onClose, animationConfig, selectedElement, }) {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      const previewElement = previewRef.current;
      previewElement.style.transition = `all ${animationConfig.speed}s ${animationConfig.easing}`;
      previewElement.style.opacity = animationConfig.opacity / 100;
      previewElement.style.transform = `scale(${animationConfig.scale})`;
      previewElement.style.filter = `blur(${animationConfig.blur}px)`;
      previewElement.style.transformOrigin = 'center';
      previewElement.style.transform += ` translate(${animationConfig.x}px, ${animationConfig.y}px)`;
      if (animationConfig.replay) {
        previewElement.style.animationIterationCount = 'infinite';
      } else {
        previewElement.style.animationIterationCount = '1';
      }
    }
  }, [animationConfig]);

  return (
    <div className={`previewModal ${isOpen ? 'previewModal_opened' : ''}`}>
      <div
        className="previewModal__animation"
        ref={previewRef}
        style={{ width: '100px', height: '100px',}}
      ></div>
      <button className="previewModal__closeButton" onClick={onClose}>Close</button>
    </div>
  );
}

export default PreviewModal;
