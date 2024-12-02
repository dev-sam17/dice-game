import React from "react";
import { useNavigate } from "react-router";
import "./rooms.scss"; // CSS file for styling

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
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="rooms">
        <button className="room-button" onClick={handleCreateRoom}>
          Create Room
        </button>
        <button className="room-button" onClick={handeJoinRoom}>
          Join Room
        </button>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
