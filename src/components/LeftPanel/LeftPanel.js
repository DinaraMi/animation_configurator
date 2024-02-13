import photo from '../../images/photo.svg';
import './LeftPanel.css';

function LeftPanel({ onSelectElement }) {

  const handleClick = (event) => {
    // const selectedElement = event.target;
    // onSelectElement(selectedElement);
    onSelectElement(document.querySelector('.leftPanel'));
  };

  return (
    <div className="leftPanel" onClick={handleClick}>
      <div className="leftPanel__container">
        <div className="leftPanel__content">
          <h1 className="leftPanel-title">Animation Settings</h1>
          <p className="leftPanel-paragraph">
            The user should have the option to select any element on the page and set up its animation using the controls in the right panel. A dotted line will show the element's position and state before the animation begins, giving the user a clear idea of how the animation will appear. The preview button on the top panel will open the result in a new tab.
          </p>
          <div className="leftPanel-buttons">
            <button className="leftPanel-button">Button</button>
            <button className="leftPanel-button"></button>
          </div>
        </div>
        <div className="leftPanel__imageContainer">
          <img src={photo} alt="фото" className="leftPanel-img" />
        </div>
      </div>
    </div>
  )
}

export default LeftPanel;
