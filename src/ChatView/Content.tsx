import React, { Component } from "react";
import { Chat, Message } from "../../electron/api/Model";
import ChatMessage from "./ChatMessage/ChatMessage";

import "./Content.css";

interface ChatViewContentProps {
  chat: Chat;
}

interface ChatViewMessageState {
  loadedMessages?: Message[];
}

class ChatViewContent extends Component<ChatViewContentProps, ChatViewMessageState> {
  constructor(props: ChatViewContentProps) {
    super(props);

    this.state = {loadedMessages: undefined};
  }

  renderMessage(message: Message) {
    return (
      <ChatMessage
        key={message.id}
        message={message}
      />
    );
  }

  render() {
    if(!this.state.loadedMessages) {
      window.api.chats.getMessagesForChat(`${this.props.chat.providerID}:${this.props.chat.id}`)
        .then((messages) => this.setState({loadedMessages: messages}));
      return <div>loading...</div>;
    }
    return (
      <div className="ChatViewContent">
        {this.state.loadedMessages.map((message) => this.renderMessage(message))}
      </div>
    );
  }
}

export default ChatViewContent;
