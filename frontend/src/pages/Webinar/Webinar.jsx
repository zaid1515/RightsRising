import React, { useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import "./Webinar.css";
import img2 from "../../images/expert.png";
import img1 from "../../images/webinar.jpg";

export default function Webinar() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "https://hey-u.vercel.app/room?id=vighneshRoom";
  };

  return (
    <div className="wbContainer">
      <Navbar2 />
      <div className="wbWrapper">
        <div className="wbcol1">
          <div className="wbimgDiv">
            <img src={img2} alt="" />
          <h2>Anton Georege</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores
            inventore commodi recusandae, corporis consequuntur ducimus magni
            optio esse facilis.
          </p>
            {/* <img src={img1} alt="" className="wbimg" /> */}
          </div>
          <form className="wbform" onSubmit={handleSubmit}>
            <h2 className="signupItem">Child Rights Webinar</h2>
            <button className="wb-btn">Join Meeting</button>
          </form>
        </div>
        <div className="wbcol2">
          <div className="wbimgDiv">
            <img src={img1} alt="" className="wbimg" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
