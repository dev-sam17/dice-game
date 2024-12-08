import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./joinRoom.scss"; // CSS file for styling

export const JoinRoom = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [inputId, setInputId] = useState("");

  const handleJoinRoom = () => {
    if (!!inputId) {
      navigate("/game");
    } else {
      alert("Enter Room Id");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className="joinRoomBg">
      <div className="bg">
        <div className="enter-roomId">
          <h1>Enter Room Id</h1>
          <input type="text" onChange={(e) => setInputId(e.target.value)} />
          <button onClick={handleJoinRoom}>Enter</button>
        </div>
        <div className="available-rooms">
          <h2>Rooms Available:</h2>
          {loader && (
            <div className="roomList">
              <div className="loader"></div>
            </div>
          )}
          {!loader && (
            <div className="roomList">
              <div className="roomInfo">
                Room 567326723 <span>Rounds: 3</span>
                <button onClick={() => navigate("/game")}>Join</button>
              </div>
              <div className="roomInfo">
                Room 567326723 <span>Rounds: 3</span>
                <button onClick={() => navigate("/game")}>Join</button>
              </div>
              <div className="roomInfo">
                Room 567326723 <span>Rounds: 3</span>
                <button onClick={() => navigate("/game")}>Join</button>
              </div>
              <div className="roomInfo">
                Room 567326723 <span>Rounds: 3</span>
                <button onClick={() => navigate("/game")}>Join</button>
              </div>
              <div className="roomInfo">
                Room 567326723 <span>Rounds: 3</span>
                <button onClick={() => navigate("/game")}>Join</button>
              </div>
              <div className="roomInfo">
                Room 567326723 <span>Rounds: 3</span>
                <button onClick={() => navigate("/game")}>Join</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
