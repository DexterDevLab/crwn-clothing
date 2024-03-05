import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/crown.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='Logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/shop/hats'>
            Hats
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
