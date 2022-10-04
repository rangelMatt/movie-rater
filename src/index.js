import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/auth'
import App from './App';
import { CookiesProvider } from 'react-cookie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    
  },
  {
    path: "/movies",
    element: <App />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
  );
