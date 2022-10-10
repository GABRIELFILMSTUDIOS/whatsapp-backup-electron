import React from "react";

import "./Header.css";

interface ChatViewHeaderProps {
  chatID: number;
}

const ChatViewHeader = ({ chatID }: ChatViewHeaderProps) => {
  return (
    <header className="ChatViewHeader">
      <img src="logo192.png"></img>
      <div className="ChatViewHeaderInfo">
        <div className="ChatViewHeaderInfoName">Chat ID: {chatID}</div>
        <div className="ChatViewHeaderInfoParticipants">Mensch1, Mensch2</div>
      </div>
    </header>
  );
};

export default ChatViewHeader;
