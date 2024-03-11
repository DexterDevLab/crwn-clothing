import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from '../../utils/firebase/firebase';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.scss';

const initialFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password do not match.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setFormFields(initialFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use, please use another.');
      } else {
        console.log(error.message);
      }
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
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          id='displayName'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          id='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          id='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
