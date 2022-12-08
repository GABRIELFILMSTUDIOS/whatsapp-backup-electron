import React, { Component } from "react";

import "./Header.css";

interface ChatMessageHeaderProps {
  name?: string;
}

class ChatMessageHeader extends Component<ChatMessageHeaderProps> {
  constructor(props: ChatMessageHeaderProps) {
    super(props);
  }

  render() {
    return (
      <div className="ChatMessageHeaderWrapper">
        <span className="ChatMessageHeader">{this.props.name}</span>
      </div>
    );
  }
}

export default ChatMessageHeader;
