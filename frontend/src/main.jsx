import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Test from './screens/test';
import Layout from './components/Layout';
import './index.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Post from './screens/Post';
import Register from './screens/Register';
import TForos from './screens/TForos';
import MisForos from './screens/MisForos';
import Records from './screens/Records';
import UserProfile from './screens/UserProfile'
import PostDetail from './screens/PostDetail';

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
        path: "post/:id",
        element: <PostDetail />,
      },
      {
        path: "TForos",
        element: <TForos />,
      },
      {
        path: "misforos",
        element: <MisForos />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "Records",
        element: <Records />,
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
  },
  {
    path: "/user",
    element: <UserProfile username="panchitadream" user_full_name="Francisca Sueño" />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
