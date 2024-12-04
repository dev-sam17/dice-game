import React from "react";
import { Outlet } from "react-router";
import "./start/start.scss"; // CSS file for styling

export const Layout = () => {
  return (
    <>
      <div className="background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/public/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Outlet />
      </div>
    </>
  );
};
