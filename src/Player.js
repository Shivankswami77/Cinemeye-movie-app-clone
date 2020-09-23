import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* Sidebar */}
        {/* Side bar and body are going to be next to each other so we wrap them inside a div*/}
        <Body />
        {/* Body */}
      </div>
    </div>
  );
}

export default Player;
