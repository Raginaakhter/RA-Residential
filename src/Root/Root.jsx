import React from 'react';
import Navbar from '../HeaderSection/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;