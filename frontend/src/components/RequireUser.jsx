import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../hooks/authContext';

const RequireUser = () => {

    const location = useLocation();
    const {isAuthenticated} = useContext(AuthContext);

    return (
        isAuthenticated.role === 0
            ? <Outlet />
            : <Navigate  to='/login' state={{from : location}} replace />
    )
}

export default RequireUser