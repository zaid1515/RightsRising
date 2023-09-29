import "./Navbar2.css";
import { NavLink } from "react-router-dom";
// import { AuthUserContext } from "../../context/AuthContext";
// import { useContext } from "react";
// import gameicon from "../../images/gameicon.svg"
import img1 from "../../images/navbarimg.png";

export default function Navbar2() {
  // const { AuthUser, setAuthUser } = useContext(AuthUserContext);

  // function Logout() {
  //   setAuthUser(null);
  // }
  return (
    <nav className="navbar2" id="mainnav">
      <img src={img1} alt="new" />
      <ul className="navbar-links ">
        <li>
          <NavLink to="/">Home
          <span></span><span></span><span></span><span></span></NavLink>
          
        </li>
        <li>
          <NavLink to="/courses">Courses
          <span></span><span></span><span></span><span></span></NavLink>

        </li>
        <li>
          <NavLink to="/blogs">Blogs
          <span></span><span></span><span></span><span></span></NavLink>
        </li>
        <li>
          <NavLink to="https://kodey18.github.io/quiz-game/">Quiz
          <span></span><span></span><span></span><span></span></NavLink>
        </li>
        <li>
          <NavLink to="https://kodey18.github.io/scramble-game/">Games
          <span></span><span></span><span></span><span></span></NavLink>
        </li>
        <li>
          <NavLink to="/event">Events
          <span></span><span></span><span></span><span></span></NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat
          <span></span><span></span><span></span><span></span></NavLink>
        </li>
        <li>
          <NavLink to="/userprofile">Profile
          <span></span><span></span><span></span><span></span></NavLink>
        </li>
      </ul>
      <div className="logoutDiv">
        <>
          <button className="lg-btn">
            <NavLink className="logout-btn" to={"/login"}>
              LOGIN
            </NavLink>
          </button>
        </>
      </div>

      {/* <img src={img1} alt="" className="navbarimg" /> */}

      {/* <br /> */}

    </nav>
  );
}
