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
    <>
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
    </>
  );
};
