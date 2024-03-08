import { useRouteError } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Error404.scss';

const Error404 = () => {
  const error = useRouteError();

  return (
    <>
      <Navigation />
      <div className='error-container'>
        <h2>Oop! {error.statusText || error.message}</h2>
        <p>Sorry, something went wrong.</p>
      </div>
    </>
  );
};
export default Error404;
