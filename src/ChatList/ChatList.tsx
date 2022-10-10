import React, { Component } from "react";
import ChatListItem from "./Item";

import "./ChatList.css";

interface ChatListProps {
  selectedChat: number | undefined;
  changeSelectedChat: (newChat: number) => void;
}

interface Chat {
  id: number;
  name: string;
  last_message_preview: string;
  last_message_timestamp: Date;
  image_src: string;
}

class ChatList extends Component<ChatListProps> {
  private isLoading: boolean;

  private chats?: Chat[];

  constructor(props: ChatListProps) {
    super(props);

    this.isLoading = false;

    this.chats = [
      {
        id: 1,
        name: "Test",
        last_message_preview: "Eine Nachricht",
        last_message_timestamp: new Date(),
        image_src: "logo192.png"
      },
      {
        id: 2,
        name: "Test2",
        last_message_preview: "Eine andere Nachricht",
        last_message_timestamp: new Date(),
        image_src: "logo192.png"
      }
    ];
  }

  renderListItem(chat: Chat) {
    return (
      <ChatListItem
        key={chat.id}
        ID={chat.id}
        name={chat.name}
        time={chat.last_message_timestamp.toLocaleTimeString()}
        content={chat.last_message_preview}
        image_src={chat.image_src}
        selected={this.props.selectedChat === chat.id}
        onClick={() => this.props.changeSelectedChat(chat.id)}
      />
    );
  }

  render() {
    if (this.isLoading) return <div className="ChatList">loading...</div>;
    if (!this.chats)
      throw new Error(`'chats' was ${this.chats} but isLoading was false.`);
    return (
      <div className="ChatList">
        {this.chats.map((chat) => this.renderListItem(chat))}
      </div>
    );
  }
}

export default ChatList;
