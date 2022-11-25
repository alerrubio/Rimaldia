import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Notifications from './screens/Notifications';
import Layout from './components/Layout';
import './index.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import TForos from './screens/TForos';
import MisForos from './screens/MisForos';
import ForumCreate from './screens/ForumCreate';
import Records from './screens/Records';
import UserProfile from './screens/UserProfile'
import Settings from './screens/Settings';
import Category from './screens/Category';
import PostDetail from './screens/PostDetail';
import ForumDetail from './screens/ForumDetail';
import Favoritos from './screens/Favoritos';
import Modal from "react-modal";
import SuperAdmin from './screens/SuperAdmin';
import AdminRecords from './components/AdminRecords';
import NewNotification from './screens/NewNotification';
import Users from './screens/Users';
import Themes from './screens/Themes';
import ThemeCreate from './screens/ThemeCreate';
import { Auth0Provider } from "@auth0/auth0-react";

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
        path: "crearforo",
        element: <ForumCreate />,
      },
      {
        path: "notifications/user/:id",
        element: <Notifications />,
      },
      {
        path: "/Category",
        element: <Category />
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
    path: "/admin",
    element: <SuperAdmin/>,
    children: [
      {
        path: "",
        element: <Users />,
      },
      {
        path: "notification",
        element: <NewNotification />,
      },
      {
        path: "usuarios",
        element: <Users />,
      },
      {
        path: "crearTema",
        element: <ThemeCreate />,
      },
      {
        path: "verTemas",
        element: <Themes />,
      }
    ] 
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/Settings",
    element: <Settings username="panchitadream" user_full_name="Francisca Sueño" role="Poeta"/>
  },
  {
    path: "/user/:id",
    element: <UserProfile username="panchitadream" user_full_name="Francisca Sueño" role="Poeta"/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
    domain='dev-f26bct3qtvafsa13.us.auth0.com'
    clientId='EvwOAyv0F5VT8aJWsYEwqC6zCNv60nrt'
    cacheLocation= 'localstorage'
    redirectUri={window.location.origin}>
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
)
