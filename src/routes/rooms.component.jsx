import React from "react";
import { useNavigate } from "react-router";
import "./start.css"; // CSS file for styling

export const Rooms = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate("/createRoom");
  };

  const handeJoinRoom = () => {
    navigate("/joinRoom");
  };

  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/public/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="" onClick={handleCreateRoom}>
        Create Room
      </button>
      <button className="" onClick={handeJoinRoom}>
        Join Room
      </button>
      <button className="action-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
