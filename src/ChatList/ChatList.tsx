import React, { Component } from "react";
import { Chat } from "../../electron/api/Model";
import ChatListItem from "./Item";

import "./ChatList.css";
import { ContextBridgeAPI } from "../../electron/preload";

interface ChatListProps {
  selectedChat: string | undefined;
  changeSelectedChat: (newChat: string) => void;
}

interface ChatListState {
  loadedChats?: Chat[];
}

class ChatList extends Component<ChatListProps, ChatListState> {
  private chats?: Chat[];

  constructor(props: ChatListProps) {
    super(props);
    this.state = {};
  }

  renderListItem(chat: Chat) {
    return (
      <ChatListItem
        key={chat.id}
        ID={chat.id}
        name={chat.name}
        time={chat.lastMessageDate}
        content={chat.lastMessagePreview}
        image_src={'logo192.png'}
        selected={this.props.selectedChat === chat.id}
        onClick={() => this.props.changeSelectedChat(`${chat.providerID}:${chat.id}`)}
      />
    );
  }

  render() {
    if (!this.state.loadedChats) {
      window.api.chats.getChats()
        .then((chats) => this.setState({loadedChats: chats}));
      return <div className="ChatList">loading...</div>
    }
    return (
      <div className="ChatList">
        {this.state.loadedChats.map((chat) => this.renderListItem(chat))}
      </div>
    );
  }
}

export default ChatList;
