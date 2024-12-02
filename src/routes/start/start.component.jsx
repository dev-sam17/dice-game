import React from "react";
import { useNavigate } from "react-router";
import "./start.scss"; // CSS file for styling

export const Start = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/rooms");
  };

  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="action-button" onClick={handleClick}>
        Play
      </button>
    </div>
  );
};
