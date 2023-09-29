import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import img1 from "../../images/navbarimg.png";
import { useTranslation } from 'react-i18next';

export default function Navbar2() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { t } = useTranslation();


  return (
    <nav className="navbar2" id="mainnav">
      <img src={img1} alt="new" />
      <ul className="navbar-links ">
        <li>
          <NavLink to="/">{t('home')}
            <span></span><span></span><span></span><span></span>
          </NavLink>
        </li>
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
      </ul>
      <button onClick={() => changeLanguage('en')}>english</button>
      <button onClick={() => changeLanguage('hi')}>hindi</button>
      <div className="logoutDiv">
        <>
          <button className="lg-btn">
            <NavLink className="logout-btn" to={"/login"}>
              {t('login')}
            </NavLink>
          </button>
        </>
      </div>
    </nav>
  );
}
