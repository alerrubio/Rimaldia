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
import ForumDetail from './screens/ForumDetail';
import Favoritos from './screens/Favoritos';
import Modal from "react-modal";
import SuperAdmin from './screens/SuperAdmin';
Modal.setAppElement("#root");


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
      {
        path: "record/:id",
        element: <Records />,
      },
      {
        path: "forum/:id",
        element: <ForumDetail forum_name="Romance" about="Foro para románticos empedernidos" members_no="3" username="Francisca Sueño"/>,
      },
      {
        path: "favoritos",
        element: <Favoritos/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/SuperAdmin",
    element: <SuperAdmin username="panchitadream" user_full_name="Francisca Sueño"/>
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/user/:id",
    element: <UserProfile username="panchitadream" user_full_name="Francisca Sueño" />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
