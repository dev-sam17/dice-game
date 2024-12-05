import { useState } from "react";
import { useNavigate } from "react-router";
import "./createRoom.scss"; // CSS file for styling

export const CreateRoom = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <>
      <div className="bg2">
        <div className="selectRounds">
          <h1>Select Number of Rounds:</h1>
          <div className="numberOfRounds">
            <button onClick={handleClick}>1 Round</button>
            <button onClick={handleClick}>3 Rounds</button>
            <button onClick={handleClick}>5 Rounds</button>
          </div>
        </div>
        {isClicked && loader && (
          <div className="showRoomId">
            <div className="loader"></div>
          </div>
        )}
        {isClicked && !loader && (
          <div className="showRoomId">
            <div className="roomId">
              Room Id: 684136463
              <a className="copyButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="20"
                  height="20"
                  stroke-width="2"
                >
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
                </svg>
              </a>
            </div>
            <button onClick={() => navigate("/game")}>Join Room</button>
          </div>
        )}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};
