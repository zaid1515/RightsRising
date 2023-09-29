import React from "react";
import "./Profile.css";
import Navbar2 from "../../components/Navbar/Navbar2";
import profilePic from "../../images/person1.jpg";
import coverImg from "../../images/bg8.jpg";
import bg1 from "../../images/badge1.jpg";
import bg2 from "../../images/badge2.jpg";
import bg3 from "../../images/badge3.jpg";

const ProfilePage = () => {
  return (
    <div className="profileConatiner">
      <Navbar2 />

      <div className="profileWrapper">
        <div className="profileRightTop">
          <img src={coverImg} alt="coverimg" className="profileCoverImg" />
          <img src={profilePic} alt="profile" className="profilePic"></img>
          <span className="profileInfo">
            <h2 className="username">
              Vighnesh
            </h2>
            <span className="userInfo">Hello everyone!!</span>
          </span>
          <div className="rewards">
            <h2>Badges Earned:</h2>
            <div className="prfimfDiv">
              <img src={bg1} alt="" srcSet="" className="bgImg"/>
              <img src={bg2} alt="" srcSet="" className="bgImg"/>
              <img src={bg3} alt="" srcSet="" className="bgImg"/>
              <img src={bg1} alt="" srcSet="" className="bgImg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
