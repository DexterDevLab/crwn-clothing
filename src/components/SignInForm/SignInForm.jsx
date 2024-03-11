import { useState } from 'react';
import {
  createUserDocument,
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss';

const SignInForm = () => {
  const [formFields, setFormFields] = useState({ email: '', password: '' });
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await singInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      setFormFields({ email: '', password: '' });
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        alert('wrong email or password');
      }
      console.log(error.message);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          id='email1'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='password1'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            className='google-sign-in'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
