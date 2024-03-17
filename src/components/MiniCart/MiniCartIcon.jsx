import { useContext } from 'react';
import cartIcon from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';
import './MiniCartIcon.scss';

const MiniCartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div
      className='cart-icon-container'
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <img src={cartIcon} alt='cart icon' className='shopping-icon' />
      <span className='item-count'>20</span>
    </div>
  );
};
export default MiniCartIcon;
