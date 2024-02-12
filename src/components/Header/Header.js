import logo from '../../images/Logo.svg';
import './Header.css';

function Header () {
  return (
    <div className='header'>
      <img src={logo} alt='логотип' className='header__logo'/>
      <button className='header__button'>Preview</button>
    </div>
  )
}

export default Header;