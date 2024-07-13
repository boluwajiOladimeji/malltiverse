import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './products/Products';
import Cart from './cart/Cart';
import Checkout from './checkout/Checkout';
import ErrorElement from './components/ErrorElement';
import { loader as productsLoader } from './components/HomePage';
import { loader as productDetailLoader } from './products/ProductDetailsSingle';
import { loader as allProductsLoader } from './products/AllProducts';
import ProductDetailsSingle from './products/ProductDetailsSingle';
import AllProducts from './products/AllProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: productsLoader,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/products',
        element: <AllProducts />,
        errorElement: <ErrorElement />,
        loader: allProductsLoader,
      },
      {
        path: '/products/:productId',
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
