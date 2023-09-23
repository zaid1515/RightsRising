import { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from  'react-icons/fa';
import axios from "axios";
import { UserContext} from "../userContext";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    const getState = async () => {
        try {
            const response = await axios.get('http://localhost:3000/', { withCredentials: true });
            console.log(response.data)
            setUserInfo(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getState();
    }, []);

    const handleLogout = async (e, role) => {
        e.preventDefault();
        let path;
        if (role === 0 || role === '0') {
            path = `/api/users/logout`;
        } else {
            path = `/api/ngo/logout`;
        }

        try {
            const res = await axios.post(path, { withCredentials: true });
            console.log(res.data);
            setUserInfo(null);
            navigate('/');
            getState();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <header>
            <Navbar bg='dark' variant="dark" expand='lg' collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/">MERN APP</Navbar.Brand>
                    <Navbar.Toggle aria-current="basic-navbar-nav" /> 
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">                         
                            {userInfo ? (
                                <>
                                    {userInfo.role === 3 && (
                                        <Nav.Link href="/login">
                                            <FaSignInAlt /> Sign In
                                        </Nav.Link>
                                    )}
                                    {userInfo.role === 1 && (
                                        <Nav.Link href="/createpost">
                                            <FaSignInAlt /> Create Post
                                        </Nav.Link>
                                    )}
                                    {userInfo.role !== 3 && (
                                        <Nav.Link href="/login" onClick={(e) => handleLogout(e, userInfo.role)}>
                                            <FaSignOutAlt /> Sign Out
                                        </Nav.Link>
                                    )}
                                </>
                            ) : (
                                // Show the "Sign In" link only if userInfo is not available
                                <Nav.Link href="/login">
                                    <FaSignInAlt /> Sign In
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header