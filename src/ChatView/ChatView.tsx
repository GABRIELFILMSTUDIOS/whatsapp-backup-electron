import React, { Component } from "react";
import ChatViewHeader from "./Header";
import ChatViewContent from "./Content";

import "./ChatView.css";

interface ChatViewProps {
  chatID: number | undefined;
}

class ChatView extends Component<ChatViewProps> {
  constructor(props: ChatViewProps) {
    super(props);
  }

  render() {
    if (this.props.chatID) {
      return (
        <div className="ChatViewWrapper">
          <div className="ChatView">
            <ChatViewHeader chatID={this.props.chatID} />
            <ChatViewContent chatID={this.props.chatID} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="ChatViewWrapper">
          <div className="ChatView">No Chat selected.</div>
        </div>
      );
    }
  }
}

export default ChatView;
