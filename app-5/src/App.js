import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"http://placeimg.com/500/480/arch"} />
      </div>
    );
  }
}

export default App;
