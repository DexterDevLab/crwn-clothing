/* eslint react/prop-types: 0 */
import './FormInput.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      <label
        htmlFor={otherProps.id}
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
