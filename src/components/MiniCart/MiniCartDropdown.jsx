import Button from '../Button/Button';
import './MiniCartDropdown.scss';

const MiniCartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button>Go to checkout</Button>
      </div>
    </div>
  );
};
export default MiniCartDropdown;
