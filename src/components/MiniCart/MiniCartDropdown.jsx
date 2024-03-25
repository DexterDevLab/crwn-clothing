import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './MiniCartDropdown.scss';

const MiniCartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};
export default MiniCartDropdown;
