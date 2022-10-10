import React, { Component } from "react";

import "./Content.css";

interface ChatMessageContentProps {
  content: string;
}

class ChatMessageContent extends Component<ChatMessageContentProps> {
  constructor(props: ChatMessageContentProps) {
    super(props);
  }

  render() {
    return (
      <div className="ChatMessageContentWrapper">
        <div className="ChatMessageContent">
          Lorem ipsum dolor sit amet, sit amet lorem ipsum.
        </div>
      </div>
    );
  }
}

export default ChatMessageContent;
