import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

function Header({ onPreviewButtonClick }) {
  const handlePreviewButtonClick = () => {
    onPreviewButtonClick();
    console.log(111);
  };

  return (
    <div className='header'>
      <img src={logo} alt='логотип' className='header__logo'/>
      <button className='header__button' onClick={handlePreviewButtonClick}>Preview</button>
    </div>
  );
}

export default Header;