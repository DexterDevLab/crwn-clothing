import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { CartContext } from '../../contexts/CartContext';
import './Checkout.scss';
import CheckoutItem from './CheckoutItem';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartTotalSum = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className='checkout-container'>
        <p className='no-item'>Your cart is empty.</p>
        <Button type='button' onClick={() => navigate('/shop')}>
          Back to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Image</span>
        </div>
        <div className='header-block'>
          <span>Name</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(product => (
        <CheckoutItem key={product.id} product={product} />
      ))}
      <span className='total'>Total: ${cartTotalSum}</span>
    </div>
  );
};

export default Checkout;
