import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position='top-center' autoClose={1000} />
    </Provider>
  </React.StrictMode>
);
