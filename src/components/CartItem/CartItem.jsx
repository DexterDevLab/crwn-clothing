/* eslint react/prop-types: 0 */
import trash from '../../assets/trash.svg';
import './CartItem.scss';

const CartItem = ({ product }) => {
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
      />
    </div>
  );
};
export default CartItem;
