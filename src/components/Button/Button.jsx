/* eslint react/prop-types: 0 */
import './Button.scss';

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button className={`button-container ${className || ''}`} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
