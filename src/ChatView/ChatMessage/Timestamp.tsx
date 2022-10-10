import React, { Component } from "react";

import "./Timestamp.css";

interface ChatMessageTimestampProps {
  date: Date;
}

class ChatMessageTimestamp extends Component<ChatMessageTimestampProps> {
  constructor(props: ChatMessageTimestampProps) {
    super(props);
  }

  render() {
    return (
      <div className="ChatMessageTimestampWrapper">
        <div className="ChatMessageTimestamp">
          <span>{this.props.date.toDateString()}</span>
        </div>
      </div>
    );
  }
}

export default ChatMessageTimestamp;
