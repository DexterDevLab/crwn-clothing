import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import {
  auth,
  createUserDocument,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase';

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocument(response.user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button>
    </>
  );
};
export default SignIn;
