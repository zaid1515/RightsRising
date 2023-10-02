import React from 'react';
import "./Eventcard.css";

export default function Eventcard(props) {
    const { imageUrl, title, description, timing, date, month } = props;

    return (
        <div className="cd3" id='eventspg'>
            <div className="cd3Wrapper" data-aos="zoom-in">
                <div className="cd3imgDiv">
                    <img src={imageUrl} alt="" className='cd3img' />
                </div>
                <div className="cd3Text1">
                    <h2 className="cd3title">{title}</h2>
                    <p className="cd3text">{description}</p>
                    <p className="cd3timing">{timing}</p>
                </div>
                <div className="dateDiv">
                    <h1 className="date">{date}</h1>
                    <h2 className="dateMonth">{month}</h2>
                </div>
            <div className="btn">
              <div className="explore btnhover">
                Register Now
              </div>
            </div>
            </div>
        </div>
    );
}
