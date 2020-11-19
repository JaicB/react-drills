import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      guitars: ["Fender", "Washburn", "Seagull", "Martin", "Gibson", "Guild", "Yamaha", "Epiphone"]
    };
  }
  render() {
    let guitarsDisplayed = this.state.guitars.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return <div className="App"> {guitarsDisplayed}</div>
  }
}

export default App;
