import { useContext } from "react";
import "./Navbar2.css";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";
import img1 from "../../images/navbarimg.png";
import { useTranslation } from 'react-i18next';


export default function Navbar2() {

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const { t } = useTranslation();

  const obj = JSON.parse(localStorage.getItem('client'));
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handlelogout = async(e) => {
    e.preventDefault();

    try{
      const response = await logout();

      if(response){
        console.log("logged out : ",response.data);
        navigate('/userlogin');
      }

    } catch(error){
      console.log("error after logout : ",error);
    }
  }

  // return (

  //   <nav className="navbar2">
  //     <ul className="navbar-links">
  //       <li>
  //         <NavLink to="/">
  //           Home
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </NavLink>
  //       </li>
  //       {obj && obj.role === 1 ? (
  //         <>
  //           <li>
  //             <NavLink to="/createblog">create Blog</NavLink>
  //           </li>
  //         </>
  //       ) : (
  //         <>
  //           <li>
  //             <NavLink to="/courses">
  //               Courses
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //             </NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="https://kodey18.github.io/quiz-game/">
  //               Quiz
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //             </NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="https://kodey18.github.io/scramble-game/">
  //               Games
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //               <span></span>
  //             </NavLink>
  //           </li>
  //         </>
  //       )}
  //       <li>
  //         <NavLink to="/event">
  //           Events
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/blogs">
  //           Blogs
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/chat">
  //           Chat
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/userprofile">
  //           Profile
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //           <span></span>


{/* export default function Navbar2() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { t } = useTranslation(); */}


  return (
    <nav className="navbar2" id="mainnav">
      <img src={img1} alt="new" />
      <ul className="navbar-links ">
        <li>
          <NavLink to="/">{t('home')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
        { obj && obj.role === 1 ? (
          <>
            <li>
              <NavLink to="/createblog">create Blog</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/courses">{t('courses')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">{t('blogs')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://kodey18.github.io/quiz-game/">{t('quiz')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://kodey18.github.io/scramble-game/">{t('games')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/event">{t('events')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat">{t('chat')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/userprofile">{t('profile')}
                <span></span><span></span><span></span><span></span>
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <button onClick={() => changeLanguage('en')}>english</button>
      <button onClick={() => changeLanguage('hi')}>hindi</button>
      <div className="logoutDiv">
        {obj ? (
          <button className="lg-btn" onClick={(e) => handlelogout(e)}>
            <NavLink className="logout-btn">Logout</NavLink>
          </button>
        ) : (
          <button className="lg-btn">
            <NavLink className="logout-btn" to="/userlogin">
              Login
            </NavLink>
            <NavLink className="logout-btn" to={"/login"}>
              {t('login')}
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
}