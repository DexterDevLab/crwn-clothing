/* eslint react/prop-types: 0*/
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../Button/Button';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button className='inverted' onClick={() => addItemToCart(product)}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
