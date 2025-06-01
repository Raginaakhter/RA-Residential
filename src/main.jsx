import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';

import Products from './Products.jsx';
import Home from './components/Home.jsx';


// started

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {

        path: "/",
        element: <Home></Home>,
       

      },

      {

        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('/Rent.json').then((res) => res.json()),
      },







    ]



  },
]);


// end



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
