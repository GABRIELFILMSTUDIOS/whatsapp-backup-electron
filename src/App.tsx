import React, { Component } from "react";
import ChatList from "./ChatList/ChatList";
import ChatView from "./ChatView/ChatView";
import "./App.css";

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

interface AppProps {}

interface AppState {
  activeChatID: number | undefined;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      activeChatID: undefined,
    };
  }

  render() {
    return (
      <div className="App">
        <ChatList
          selectedChat={this.state.activeChatID}
          changeSelectedChat={(newChatID) =>
            this.setState({ activeChatID: newChatID })
          }
        />
        <ChatView chatID={this.state.activeChatID} />
      </div>
    );
  }
}

export default App;
