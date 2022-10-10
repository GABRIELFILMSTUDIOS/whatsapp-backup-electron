import React, { Component } from "react";

import ChatMessageHeader from "./Header";
import ChatMessageContent from "./Content";
import ChatMessageTimestamp from "./Timestamp";

import "./ChatMessage.css";

interface ChatMessageProps {
  ID: number;
}

class ChatMessage extends Component<ChatMessageProps> {
  private readonly isFromMe: boolean;

  constructor(props: ChatMessageProps) {
    super(props);

    this.isFromMe = props.ID === 3;
  }

  render() {
    return (
      <div className={`ChatMessageWrapper ${this.isFromMe ? "fromMe" : ""}`}>
        <div className="ChatMessage">
          <ChatMessageHeader name="Name" />
          <ChatMessageContent content="Loerm ipsum dolor sit amet" />
          <ChatMessageTimestamp date={new Date()} />
        </div>
      </div>
    );
  }
}

export default ChatMessage;
