import { useRouteError } from 'react-router-dom';

const Error404 = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Oop! {error.statusText || error.message}</h2>
      <p>Sorry, something went wrong.</p>
    </div>
  );
};
export default Error404;
