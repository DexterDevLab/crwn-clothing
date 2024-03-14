import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleLogout = async e => {
    e.preventDefault();
    await signOutUser();
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='Logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
          {currentUser ? (
            <a className='nav-link' onClick={handleLogout} href='#'>
              Sign Out
            </a>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
