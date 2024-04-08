import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import './Category.scss';

const Category = () => {
  let { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category, setProducts]);

  return (
    <>
      <h2 className='product-cat-title'>{category.toUpperCase()}</h2>
      <div className='product-container'>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
export default Category;
