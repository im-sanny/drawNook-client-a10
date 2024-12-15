import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Routes/Route';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <Toaster />
      <RouterProvider router={Route} />
    </FirebaseProvider>
  </React.StrictMode>
);
