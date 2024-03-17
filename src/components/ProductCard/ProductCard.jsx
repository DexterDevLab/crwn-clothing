/* eslint react/prop-types: 0*/
import Button from '../Button/Button';
import './ProductCard.scss';

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button className='inverted'>Add to cart</Button>
    </div>
  );
};
export default ProductCard;
