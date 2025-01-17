import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './Components/Home.jsx';
import Weather from './Components/Weather.jsx';
import Recipe from './Components/Recipe.jsx';
import Dictionary from './Components/Dictionary.jsx';
import Currency from './Components/Currency.jsx';
import Password from './Components/Password Generator.jsx';
import Location from './Components/Location.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/Home" replace />
      },
      {
        path: "/Home",
        element: <Home/>
      },
      {
        path: "/Weather",
        element: <Weather/>
      },
      {
        path: "/Recipe",
        element: <Recipe/>
      },
      {
        path: "/Location",
        element: <Location/>
      },
      {
        path: "/Dictionary",
        element: <Dictionary/>
      },
      // {
      //   path: "/Currency",
      //   element: <Currency/>
      // },
      {
        path: "/Password Generator",
        element: <Password/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
