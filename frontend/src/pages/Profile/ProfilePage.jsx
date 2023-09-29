import React from "react";
import "./Profile.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import profilePic from "../../images/person1.jpg";
import coverImg from "../../images/bg8.jpg";
import bg1 from "../../images/badge1.jpg";
import bg2 from "../../images/badge2.jpg";
import bg3 from "../../images/badge3.jpg";
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <div className="profileConatiner">
      <Navbar2 />

      <div className="profileWrapper">
        <div className="profileRightTop">
          <img src={coverImg} alt="coverimg" className="profileCoverImg" />
          <img src={profilePic} alt="profile" className="profilePic"></img>
          <span className="profileInfo">
            <h2 className="username">{t('vighnesh')}</h2>
            <span className="userInfo">{t('helloEveryone')}</span>
          </span>
          <div className="row">
            <div className="rewards">
              <h2>{t('badgesEarned')}:</h2>
              <div className="prfimfDiv">
                <img src={bg1} alt="" srcSet="" className="bgImg" />
                <img src={bg2} alt="" srcSet="" className="bgImg" />
                <img src={bg3} alt="" srcSet="" className="bgImg" />
                <img src={bg1} alt="" srcSet="" className="bgImg" />
              </div>
            </div>
            <div className="rewards">
              <h2>{t('bio')}:</h2>
              <p>
                {t('bioContent')}
              </p>
            </div>
            <div className="rewards">
              <h2>{t('coursesCompleted')}:</h2>
              <p className="pflistItem">{t('course1')}</p>
              <p className="pflistItem">{t('course2')}</p>
              <p className="pflistItem">{t('course3')}</p>
              <p className="pflistItem">{t('course4')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
