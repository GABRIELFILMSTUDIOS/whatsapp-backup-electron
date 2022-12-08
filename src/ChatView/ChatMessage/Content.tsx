import React, { Component } from "react";
import { Message as ModelChatMessage } from "../../../electron/api/Model";
import { MessageType } from '../../api-enums';

import "./Content.css";


interface ChatMessageContentProps {
  message: ModelChatMessage;
}

class ChatMessageContent extends Component<ChatMessageContentProps> {
  constructor(props: ChatMessageContentProps) {
    super(props);
  }

  renderError(err: any) {
    return <p><b>{err.toString()}</b></p>
  }

  render() {
    const { message } = this.props;

    let messageTypeElement = <p><i>{message.type}</i></p>;
    let groupEventTypeElement = <p><i>{message.groupEventType}</i></p>;

    return (
      <div className="ChatMessageContentWrapper">
        <div className="ChatMessageContent">
          {message.type === MessageType.SYSTEM_MESSAGE ? groupEventTypeElement : ''}
          {message.textContent}
          {message.type !== MessageType.TEXT ? messageTypeElement : ''}
          {message.loadErrors?.map((err) => this.renderError(err))}
        </div>
      </div>
    );
  }
}

export default ChatMessageContent;
