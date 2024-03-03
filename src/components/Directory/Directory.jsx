/* eslint react/prop-types: 0 */
import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(category => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Directory;
