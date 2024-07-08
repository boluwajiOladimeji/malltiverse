import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './products/Products';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
