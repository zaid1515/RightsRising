import React from "react";
import "./Homecard.css";
import img1 from "../../images/bg4.jpg";

export default function Homecard(props) {
  return (
    <div className={props.ct}>
      <div className="cd6Wrapper">
        <div className="cd6textDiv">
          <h3>{props.name}</h3>
          <p className="cd6Text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            optio non unde temporibus velit necessitatibus odio.
          </p>
        </div>
        <div className="cd6imgDiv">
          <img src={img1} alt="" className="cd6Image" />
        </div>
      </div>
    </div>
  );
}
