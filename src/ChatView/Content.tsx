import React, { Component } from "react";
import ChatMessage from "./ChatMessage/ChatMessage";

import "./Content.css";

interface ChatViewContentProps {
  chatID: number;
}

class ChatViewContent extends Component<ChatViewContentProps> {
  constructor(props: ChatViewContentProps) {
    super(props);
  }

  render() {
    return (
      <div className="ChatViewContent">
        <ChatMessage ID={1} />
        <ChatMessage ID={2} />
        <ChatMessage ID={3} />
      </div>
    );
  }
}

export default ChatViewContent;
