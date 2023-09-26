import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../hooks/authContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectRoutes = () => {
    const location = useLocation();
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

    useEffect(()=>{
        console.log('Protect route state value check : ',isAuthenticated);
    }, []);


    return (
        !isAuthenticated.auth
            ? <Outlet />
            : <Navigate  to='/' state={{from : location}} replace />
    );
}

export default ProtectRoutes