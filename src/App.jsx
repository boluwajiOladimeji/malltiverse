import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './products/Products';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';
import ErrorElement from './components/ErrorElement';
import { loader as productsLoader } from './products/SectionItems';
import { loader as productDetailLoader } from './products/ProductDetailsSingle';
import ProductDetailsSingle from './products/ProductDetailsSingle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: '/:productId',
        element: <ProductDetailsSingle />,
        loader: productDetailLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
