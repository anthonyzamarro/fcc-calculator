import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Pocket Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
