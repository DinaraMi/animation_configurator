import React, { useState } from 'react';
import Header from '../Header/Header';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import PreviewModal from '../AnimationPreview/PreviewModal';
import './App.css';

function App() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
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

  const handleSelectElement = (selectedElement) => {
    // Получаем список всех дочерних элементов внутри выбранного элемента
    const childElements = selectedElement.querySelectorAll('*');
  
    // Проверяем, является ли кликнутый элемент одним из дочерних элементов
    const clickedElement = Array.from(childElements).find(element => element === selectedElement);
  
    // Если кликнутый элемент является одним из дочерних элементов,
    // то это тот элемент, который мы хотим выбрать
    if (clickedElement) {
      setSelectedElement(clickedElement);
    } else {
      // Если кликнутый элемент не является одним из дочерних элементов,
      // то это родительский элемент, и мы можем выбрать его
      setSelectedElement(selectedElement);
    }
  };
  

  const handlePreviewButtonClick = () => {
    setShowPreviewModal(true);
  };

  const handleClosePreviewModal = () => {
    setShowPreviewModal(false);
  };

  const handleApplyAnimation = () => {
    if (selectedElement) {
      selectedElement.style.transition = `all ${animationConfig.speed}s ${animationConfig.easing}`;
      selectedElement.style.opacity = animationConfig.opacity / 100;
      selectedElement.style.transform = `scale(${animationConfig.scale})`;
      selectedElement.style.filter = `blur(${animationConfig.blur}px)`;
      selectedElement.style.transformOrigin = 'center';
      selectedElement.style.transform += ` translate(${animationConfig.x}px, ${animationConfig.y}px)`;
      if (animationConfig.replay) {
        selectedElement.style.animationIterationCount = 'infinite';
      } else {
        selectedElement.style.animationIterationCount = '1';
      }
    }
  };

  const handleAnimationConfigChange = (config) => {
    setAnimationConfig(config);
  };

  return (
    <div className="app">
      <Header onPreviewButtonClick={handlePreviewButtonClick} />
      <main className="app__content">
        <LeftPanel onSelectElement={handleSelectElement} />
        <RightPanel applyAnimation={handleApplyAnimation} animationConfig={animationConfig} onConfigChange={handleAnimationConfigChange} />
      </main>
      {showPreviewModal && <PreviewModal
        onClose={handleClosePreviewModal}
        isOpen={showPreviewModal}
        selectedElement={selectedElement}
        animationConfig={animationConfig}
      />}
    </div>
  );
}

export default App;
