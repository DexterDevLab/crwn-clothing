/* eslint react/prop-types: 0 */

import './CategoryItem.scss';

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shopw Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
