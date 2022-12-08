import React, { Component } from "react";

import "./Item.css";

interface ChatListItemProps {
  ID: string;
  name: string;
  time?: Date;
  content: string;
  image_src: string;
  selected: boolean;
  onClick: () => void;
}

interface ChatListItemState {
  selected: boolean;
}

class ChatListItem extends Component<ChatListItemProps, ChatListItemState> {
  constructor(props: ChatListItemProps) {
    super(props);
    this.state = { selected: false };
  }

  render() {
    const { name, time, content, image_src, selected, onClick } = this.props;
    return (
      <div
        className={`ChatListItemWrapper ${selected ? "selected" : ""}`}
        onClick={() => onClick()}
      >
        <div className="ChatListItem">
          <div className="ChatListItemIconWrapper">
            <div className="ChatListItemIcon">
              <img src={image_src} />
            </div>
          </div>
          <div className="ChatListItemPreviewWrapper">
            <div className="ChatListItemPreview">
              <div className="ChatListItemPreviewHeader">
                <div className="ChatListItemPreviewName">{name}</div>
                <div className="ChatListItemPreviewTime">{time?.toLocaleTimeString()}</div>
              </div>
              <div className="ChatListItemPreviewContent">{content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatListItem;
