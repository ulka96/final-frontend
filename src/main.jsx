import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/home/page.jsx";
import SignInPage from './pages/sign-in/page.jsx';
import SignUpPage from './pages/sign-up/page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/sign-in',
        element: <SignInPage/>
      },
      {
        path: '/sign-up',
        element: <SignUpPage/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
