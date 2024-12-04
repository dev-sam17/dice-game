import React from "react";
import { useNavigate } from "react-router";
import "./start.scss"; // CSS file for styling

export const Start = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/rooms");
  };

  return (
    <button className="action-button" onClick={handleClick}>
      Play
    </button>
  );
};
