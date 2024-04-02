/* eslint react/prop-types: 0 */
import { useContext } from 'react';
import trash from '../../assets/trash.svg';
import { CartContext } from '../../contexts/CartContext';
import './CheckoutItem.scss';

const CheckoutItem = ({ product }) => {
  const { clearItemInCart, addItemToCart, deleteItemInCart } =
    useContext(CartContext);
  const { name, id, imageUrl, price, quantity } = product;

  // helper functions
  const clearItemHandler = () => clearItemInCart(id);
  const addItemHandler = () => addItemToCart(product);
  const deleteItemHandler = () => deleteItemInCart(product);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={deleteItemHandler}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button'>
        <img
          className='item-del'
          src={trash}
          alt='trash icon'
          title='delete item'
          onClick={clearItemHandler}
        />
      </div>
    </div>
  );
};
export default CheckoutItem;
