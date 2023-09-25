
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaBook, FaPlus, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";

const Header = () => {

  const {isAuthenticated} = useContext(AuthContext);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">MERN APP</Navbar.Brand>
          <Navbar.Toggle aria-current="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isAuthenticated.auth ? (
                <>
                  {isAuthenticated.role === 1 && (
                    <>
                      <Nav.Link href="/createpost">
                        <FaPlus /> Create Post
                      </Nav.Link>
                      <Nav.Link href="/blogs">
                        <FaBook /> Blogs
                      </Nav.Link>
                    </>
                  )}
                    <Nav.Link href="/login">
                      <FaSignOutAlt /> Log Out
                    </Nav.Link>
                </>
              ) : (
                // Show the "Sign In" link only if userInfo is not available
                <Nav.Link href="/login">
                  <FaSignInAlt /> Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
