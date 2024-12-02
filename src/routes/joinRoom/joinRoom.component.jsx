import React from "react";
import { useNavigate } from "react-router";
import "./joinRoom.scss"; // CSS file for styling

export const JoinRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="enter-roomId">
        <h1>Enter Room Id</h1>
        <input type="text" />
        <button onClick={() => navigate("/game")}>Enter</button>
      </div>
      <div className="available-rooms">
        <h2>Rooms Available:</h2>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
