import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import './MiniCartDropdown.scss';

const MiniCartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Button
        type='button'
        disabled={cartItems.length === 0 ? true : false}
        onClick={() => navigate('/checkout')}
      >
        Go to checkout
      </Button>
    </div>
  );
};
export default MiniCartDropdown;
