import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: ["ball", "bat", "glove", "cork"]
    }
  }

  render() {
    let baseballStuffs = this.state.items.map((element, index) => {
      return <h1 key={index}>{element}</h1>
    })

    return <div className="App">{baseballStuffs}</div>
  }
}

export default App;