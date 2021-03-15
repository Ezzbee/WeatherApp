import React, { Component } from "react";
import "./App.css";
import Forecast from "./Forecast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      unit: "imperial",
    };
  }
  render() {
    return (
      <div className="App">
        <main>
          <h1>Weather Forecast App</h1>
          <Forecast />
        </main>
        <footer>Created by Tunde Bello</footer>
      </div>
    );
  }
}
export default App;
