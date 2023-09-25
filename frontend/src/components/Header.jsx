
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaBook, FaPlus, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const {isAuthenticated, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async(e) => {
    e.preventDefault();

    try{
      const response = await logout();
      if(response){
        navigate('/');
      }
    }catch(err){
      console.log(`error from the header : `, err);
    }
  }

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
                    <Nav.Link href="/login" onClick={(e) => handleLogout(e)}>
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
