import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication';
import Error404 from './routes/Error404/Error404';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/auth',
        element: <Authentication />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
