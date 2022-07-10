import React, { Component } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import TopBar from "./Components/TopBar/TopBar";
import Productdisplay from "./Components/Homepage/Productdisplay/Productdisplay";
import Homepage from "./Components/Homepage/Homepage";
export class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        <Header />
        <Productdisplay />
        <Homepage />
      </div>
    );
  }
}

export default App;
