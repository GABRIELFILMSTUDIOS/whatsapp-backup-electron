import React, { Component } from "react";
import ChatViewHeader from "./Header";
import ChatViewContent from "./Content";

import "./ChatView.css";
import { Chat } from "../../electron/api/Model";

interface ChatViewProps {
  chat?: Chat;
  hasFailedLoading?: boolean
}

class ChatView extends Component<ChatViewProps> {
  constructor(props: ChatViewProps) {
    super(props);
  }

  render() {
    if(this.props.hasFailedLoading) return (<div>There was an error</div>)
    if (this.props.chat) {
      return (
        <div className="ChatViewWrapper">
          <div className="ChatView">
            <ChatViewHeader chat={this.props.chat} />
            <ChatViewContent chat={this.props.chat} />
          </div>
        </div>
      );
    } else { // No chat selected
      return (
        <div className="ChatViewWrapper">
          <div className="ChatView">No Chat selected.</div>
        </div>
      );
    }
  }
}

export default ChatView;
