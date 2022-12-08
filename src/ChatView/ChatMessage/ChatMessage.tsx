import React, { Component } from "react";

import ChatMessageHeader from "./Header";
import ChatMessageContent from "./Content";
import ChatMessageTimestamp from "./Timestamp";

import "./ChatMessage.css";
import { Message } from '../../../electron/api/Model'
import { MessageType } from '../../api-enums';

interface ChatMessageProps {
  message: Message;
}

class ChatMessage extends Component<ChatMessageProps> {
  constructor(props: ChatMessageProps) {
    super(props);
  }

  render() {
    let { message } = this.props;

    return (
      <div className={`ChatMessageWrapper ${this.props.message.isFromMe ? "fromMe" : ""} ${this.props.message.type == MessageType.SYSTEM_MESSAGE ? "systemMessage" : ""}`} onClick={() => console.log(message)}>
        <div className={`ChatMessage  ${this.props.message.loadErrors ? "error" : ""}`}>
          <ChatMessageHeader name={this.props.message.from ? this.props.message.from.fullName : ''} />
          <ChatMessageContent message={this.props.message} />
          <ChatMessageTimestamp date={this.props.message.messageDate} />
        </div>
      </div>
    );
  }
}

export default ChatMessage;