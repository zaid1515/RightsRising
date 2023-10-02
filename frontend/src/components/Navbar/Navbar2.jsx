import { useContext } from "react";
import "./Navbar2.css";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";
import img1 from "../../images/main-logo.jpg";
import { useTranslation } from 'react-i18next';


export default function Navbar2() {

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { t } = useTranslation();

  const obj = JSON.parse(localStorage.getItem('client'));
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = async (e) => {
    e.preventDefault();

    try {
      const response = await logout();

      if (response) {
        console.log("logged out : ", response.data);
        navigate('/userlogin');
      }

    } catch (error) {
      console.log("error after logout : ", error);
    }
  }


  return (
    <nav className="navbar2" id="mainnav">
      <img className="logo" src={img1} alt="new" />
      <ul className="navbar-links ">
        <li>
          <NavLink to="/">
            {t("Home")}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        {obj && obj.role === 1 ? (
          <>
            <li>
              <NavLink to="/createblog">
                {t("Create Blog")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/createquiz">
                {t("Create Qiz")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                {t("Blogs")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/modules">
                {t("Modules")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blogs">
                {t("Blogs")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://kodey18.github.io/quiz-game/">
                {t("Challenges")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              {/* https://kodey18.github.io/scramble-game/ */}
              <NavLink to="/games">
                {t("Games")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/events">
                {t("Events")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat">
                {t("Chat")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/userprofile">
                {t("Profile")}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="language-dropdown">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      {/* <div className="logoutDiv">
        <>
          <button className="lg-btn">
            <NavLink className="logout-btn" to={"/userlogin"}>
              {t("Login")}
            </NavLink>
          </button>
        </>
      </div> */}
      <div className="logoutDiv">
        {obj ? (
          <button className="lg-btn" onClick={(e) => handlelogout(e)}>
            <NavLink className="logout-btn">Logout</NavLink>
          </button>
        ) : (
          <button className="lg-btn">
            <NavLink className="logout-btn" to="/userlogin">

            </NavLink>
            <NavLink className="logout-btn" to={"/login"}>
              {t("Login")}
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
}