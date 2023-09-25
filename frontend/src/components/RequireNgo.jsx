import React, {useContext} from 'react'
import { AuthContext } from '../hooks/authContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireNgo = () => {
    const location = useLocation();
    const {isAuthenticated} = useContext(AuthContext);

    return (
        isAuthenticated.role === 1 
            ? <Outlet /> 
            : <Navigate to='/ngologin' state={{from : location}} replace />
    );
}

export default RequireNgo