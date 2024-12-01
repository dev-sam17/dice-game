import React from "react";
import { useNavigate } from "react-router";
import "./start.css"; // CSS file for styling

export const JoinRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/public/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Enter Room Id</h1>
      <input type="text" />
      <button onClick={() => navigate("/game")}>Enter</button>
      <div>
        <h2>Rooms Available</h2>
      </div>
      <button className="action-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
