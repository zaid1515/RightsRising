import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../hooks/authContext';

const RequireUser = () => {

    const location = useLocation();
    const {isAuthenticated} = useContext(AuthContext);
    
    return (
        <div>RequireUser</div>
    )
}

export default RequireUser