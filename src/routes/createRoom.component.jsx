import React from "react";
import { useNavigate } from "react-router";
import "./start.css"; // CSS file for styling

export const CreateRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/public/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Select Number of Rounds:</h2>
      <button className="">1 Round</button>
      <button className="">3 Rounds</button>
      <button className="">5 Rounds</button>
      <button className="action-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
