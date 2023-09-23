import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from  'react-icons/fa';
import axios from "axios";


const Header = () => {

    const [currState, setCurrState] = useState(null);

    const getState = async() => {
        try{
            const response = await axios.get('http://localhost:3000/', {withCredentials : true});
            setCurrState(response.data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
            getState();
    }, []);

    const handleLogout = async(e, role) => {
        e.preventDefault();
        let path;
        if(role === 0 || role === '0'){
            path = `/api/users/logout`;
        } else{
            path = `/api/ngo/logout`;
        }

        try{
            const res = await axios.post(path, {withCredentials : true});
            setCurrState(null);
        }catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
            getState();
    }, [handleLogout]);

    return (
        <header>
            <Navbar bg='dark' variant="dark" expand='lg' collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/">MERN APP</Navbar.Brand>
                    <Navbar.Toggle aria-current="basic-navbar-nav" /> 
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {currState && (
                                <>
                                {   currState.role === 3 &&                           
                                <Nav.Link href="/login">
                                    <FaSignInAlt /> Sign In
                                </Nav.Link>
                                }
                                {    currState.role === 1 &&                           
                                <Nav.Link href="/create">
                                    <FaSignInAlt /> Create Post
                                </Nav.Link>
                                }
                                {   currState.role !==3 &&
                                <Nav.Link href="/login" onClick={(e) => handleLogout(e, currState.role)}>
                                    <FaSignOutAlt /> Sign Out
                                </Nav.Link>
                                }
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header