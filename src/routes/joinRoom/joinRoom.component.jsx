import React from "react";
import { useNavigate } from "react-router";
import "./joinRoom.scss"; // CSS file for styling

export const JoinRoom = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg">
        <div className="enter-roomId">
          <h1>Enter Room Id</h1>
          <input type="text" />
          <button onClick={() => navigate("/game")}>Enter</button>
        </div>
        <div className="available-rooms">
          <h2>Rooms Available:</h2>
          <div className="roomList">
            <div className="roomInfo">
              Room 567326723 <span>Rounds: 3</span>
              <button>Join</button>
            </div>
            <div className="roomInfo">
              Room 567326723 <span>Rounds: 3</span>
              <button>Join</button>
            </div>
            <div className="roomInfo">
              Room 567326723 <span>Rounds: 3</span>
              <button>Join</button>
            </div>
            <div className="roomInfo">
              Room 567326723 <span>Rounds: 3</span>
              <button>Join</button>
            </div>
            <div className="roomInfo">
              Room 567326723 <span>Rounds: 3</span>
              <button>Join</button>
            </div>
            <div className="roomInfo">
              Room 567326723 <span>Rounds: 3</span>
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};
