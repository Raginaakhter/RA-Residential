import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';



import Home from './components/Home.jsx';
import Itempage1 from './pages/Itempage1.jsx';
import Detailssiggleitem from './pages/Detailssiggleitem.jsx';
import ContactUs from './components/ContactUs.jsx';
import Comments from './pages/Comments.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Authprovider from './provider/Authprovider';
import UserProfile from './pages/UserProfile.jsx';
import PrivateRoutes from './privateRoute/PrivateRoutes.jsx';


// started

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {

        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Rent.json').then((res) => res.json()),

      },
      {
        path: "/itempage1",
        element: <Itempage1></Itempage1>,
         loader: () => fetch('/items.json').then((res) => res.json()),
       
      },
     {
  path: "/details/:id", 
  element: <PrivateRoutes>
    <Detailssiggleitem />
  </PrivateRoutes>,
  loader: async ({ params }) => {
    const res = await fetch("/items.json");
    const data = await res.json();
    const productItem = data?.find((news) => news.id === params.id);
    if (!productItem) {
      throw new Response("Not Found", { status: 404 });
    }
    return productItem;
  },
  
},
 {
        path: "/contact",
        element: <ContactUs></ContactUs>,
         
       
      },
       {
        path: "/comments",
        element: <Comments></Comments>,
         
       
      },

 {
        path: "/login",
        element:<Login></Login>,
         
       
      },
      {
        path: "/register",
        element:<Register></Register>,
         
       
      },
       {
        path: "/userprofile",
        element:<UserProfile></UserProfile>,
         
       
      }





    ]



  },
]);


// end



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
       <RouterProvider router={router} />
    </Authprovider>
   
  </StrictMode>,
)
