import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://m.media-amazon.com/images/M/MV5BN2E0YTZmNmMtZWM0Ni00ZjhlLTllNGQtMzYyYTY4NWEzOTFkXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
