import React, { Component } from "react";
import "./App.css";
import AccountList from "./components/AccountList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <div>"Accounts..."</div>
        <AccountList />

      </div>
    );
  }
}

export default App;
