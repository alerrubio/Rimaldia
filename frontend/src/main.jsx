import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Post from './screens/Post';
import Register from './screens/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
