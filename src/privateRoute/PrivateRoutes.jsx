import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/loading';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const loacation =useLocation();
    console.log(loacation)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoutes;