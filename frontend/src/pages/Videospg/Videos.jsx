import React, { useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import Video1 from "../../videos/1st.mp4";
import Video2 from "../../videos/2nd.mp4";
import Video3 from "../../videos/3rd.mp4";
import Video4 from "../../videos/The Voice of Alex.mp4";
import Video5 from "../../videos/GdBdTouch.mp4";
import Video6 from "../../videos/FactoryOfDreamsCond.mp4";
import vd1img from "../../images/video1img.jpg";
import vd2img from "../../images/video2img.jpg";
import vd3img from "../../images/video3img.jpg";
import vd4img from "../../images/video4img.png";
import vd5img from "../../images/video5img.png";
import imgcon1 from "../../images/imgcon1.png";
import "./Videos.css";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [popupMessage, setPopupMessage] = useState(""); // New state for the popup message

  const videoData = [
    {
      id: 1,
      title: "Factory of Dreams",
      image: imgcon1,
      url: Video6,
    },
    {
      id: 2,
      title: "Right To Freedom",
      image: vd2img,
      url: Video2,
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setVideoCompleted(false);
    setSelectedAnswer(null); // Reset selected answer
    setPopupMessage(""); // Reset the popup message
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setVideoCompleted(false);
    setSelectedAnswer(null); // Reset selected answer
    setPopupMessage(""); // Reset the popup message
  };

  const handleVideoEnd = () => {
    console.log("first");
    setVideoCompleted(true);
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleContinueClick = () => {
    if (selectedAnswer) {
      // Handle the selected answer logic here
      // You can use the value of selectedAnswer to perform actions
      if (selectedAnswer === "wrong") {
        console.log("Wrong Answer");
        setPopupMessage("Wrong Answer!Reporting the factory may lead to a rescue operation and legal consequences for the factory owner and thus all the children will be saved!"); // Set the popup message for a wrong answer
      } else if (selectedAnswer === "right") {
        console.log("Right Answer");
        setPopupMessage("Right Answer!Reporting the factory may lead to a rescue operation and legal consequences for the factory owner and thus all the children will be saved!"); // Set the popup message for a right answer
      }
    } else {
      alert("Please select an answer.");
    }
  };

  return (
    <div className="videoContainer">
      <Navbar2 />
      <div className="cdWrapper" id="vid-pg-cont">
        <h2 className="homeTitle" id="md-title">
          Modules
        </h2>
        <div className="videoWrapper">
          {videoData.map((video) => (
            <div
              className="video-card"
              key={video.id}
              onClick={() => handleVideoClick(video)}
            >
              <video
                width="800"
                height="500"
                className="hidden-video"
                src={video.url}
                title={video.title}
                controls
                muted
                autoPlay
              />
              <img src={video.image} alt={video.title} className="videoImg" />
              <h3>{video.title}</h3>
            </div>
          ))}
          {selectedVideo && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-btn" onClick={closeModal}>
                  <span className="X"></span>
                  <span className="Y"></span>
                  <div className="close">Close</div>
                </button>

                {!videoCompleted && (
                  <video
                    width="800"
                    height="500"
                    src={selectedVideo.url}
                    title={selectedVideo.title}
                    allowFullScreen
                    onEnded={handleVideoEnd}
                    className="iframe"
                    style={{ display: videoCompleted ? "none" : "block" }}
                    autoPlay
                  />
                )}
                {videoCompleted && (
                  <div className="compltetd-video">
                    <div className="compltetd-video-content">
                      <h2>What should Ravi do??</h2>

                      <input
                        type="radio"
                        id="wrongAnswer"
                        name="answer"
                        value="wrong"
                        checked={selectedAnswer === "wrong"}
                        onChange={handleAnswerChange}
                      />
                      Ravi should keep quiet and avoid the trouble.

                      <input
                        type="radio"
                        id="rightAnswer"
                        name="answer"
                        value="right"
                        checked={selectedAnswer === "right"}
                        onChange={handleAnswerChange}
                      />
                      Ravi should gather evidence and report the factory, confront the factory owner.

                      <button id="continueButton" onClick={handleContinueClick}>
                        Continue
                      </button>

                      {/* Display the popup message */}
                      {popupMessage && (
  <div className="popup-message">
    <p>{popupMessage}</p>
  </div>
)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
