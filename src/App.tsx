import React, { Component } from "react";
import ChatList from "./ChatList/ChatList";
import ChatView from "./ChatView/ChatView";
import "./App.css";
import { Chat } from "../electron/api/Model";


// import { Database, OPEN_READONLY } from "sqlite3";

// export const db = new Database(
//   "./databases/ChatStorage.sqlite",
//   OPEN_READONLY,
//   (err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log("Connected to ChatStorage.");
//   }
// );

interface AppProps {
}

interface AppState {
  activeChatID: string | undefined;
  activeChatHasFailedLoading: boolean;
  activeChat?: Chat;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      activeChatID: undefined,
      activeChatHasFailedLoading: false
    };
  }

  updateActiveChat(newChatId: string) {
    this.setState({ activeChatID: newChatId, activeChat: undefined }, () => {
      window.api.chats.getChatByID(newChatId)
        .then(
          (chat) => this.setState({activeChat: chat, activeChatHasFailedLoading: false}),
          (err) => this.setState({activeChatHasFailedLoading: true})
        );
    })
  }

  render() {
    return (
      <div className="App">
        <ChatList
          selectedChat={this.state.activeChatID}
          changeSelectedChat={(newChatId) => this.updateActiveChat(newChatId)
          }
        />
        <ChatView chat={this.state.activeChat} />
      </div>
    );
  }
}

export default App;
