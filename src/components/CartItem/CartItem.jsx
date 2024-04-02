/* eslint react/prop-types: 0 */
import { useContext } from 'react';
import trash from '../../assets/trash.svg';
import { CartContext } from '../../contexts/CartContext';
import './CartItem.scss';

const CartItem = ({ product }) => {
  const { clearItemInCart } = useContext(CartContext);

  const { name, imageUrl, id, price, quantity } = product;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
      <img
        className='item-del'
        src={trash}
        alt='trash icon'
        title='delete item'
        onClick={() => clearItemInCart(id)}
      />
    </div>
  );
};
export default CartItem;
