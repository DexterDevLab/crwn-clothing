import SignUpForm from '../../components/SignUpForm/SignUpForm';
import {
  createUserDocument,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Popup</button>
      <SignUpForm />
    </>
  );
};
export default SignIn;
