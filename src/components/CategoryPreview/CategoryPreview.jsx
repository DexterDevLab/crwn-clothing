/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products.map((product, index) => {
          if (index > 3) return;
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
export default CategoryPreview;
