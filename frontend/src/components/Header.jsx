import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from  'react-icons/fa';


const Header = () => {
    const [isloggedOut, setIsloggedOut] = useState(false);

        const handleLogOut = async (e) => {
        e.preventDefault();

            try {
                const response = await axios.post("/api/users/logout");
                if (response) {
                setIsloggedOut(true);
                }
            } catch (err) {
                console.log(err);
            }
        };

    return (
        <header>
            <Navbar bg='dark' variant="dark" expand='lg' collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/">MERN APP</Navbar.Brand>
                    <Navbar.Toggle aria-current="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                isloggedOut && 
                                <Nav.Link href="/login">
                                    <FaSignInAlt /> Sign In
                                </Nav.Link>
                            }
                            {
                                !isloggedOut &&
                                <Nav.Link href="/login" onClick={handleLogOut}>
                                    <FaSignOutAlt /> Sign Out
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header