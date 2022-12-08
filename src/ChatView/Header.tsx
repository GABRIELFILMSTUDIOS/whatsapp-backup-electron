import React from "react";
import { Chat } from "../../electron/api/Model";

import "./Header.css";

interface ChatViewHeaderProps {
  chat: Chat;
}

const ChatViewHeader = ({ chat }: ChatViewHeaderProps) => {
  return (
    <header className="ChatViewHeader" onClick={() => console.log(chat)}>
      <img src="logo192.png"></img>
      <div className="ChatViewHeaderInfo">
        <div className="ChatViewHeaderInfoName">{chat.name}</div>
        <div className="ChatViewHeaderInfoParticipants">Mensch1, Mensch2</div>
      </div>
    </header>
  );
};

export default ChatViewHeader;
