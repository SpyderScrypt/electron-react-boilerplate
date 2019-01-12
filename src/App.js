import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const electron = window.require("electron");
const fs = electron.remote.require("fs");
const ipcRenderer = electron.ipcRenderer;

var name;

class App extends Component {

  state = {
    name:null
  }

  componentDidMount() {
    // Communication tutorial basic
    ipcRenderer.on("todo:add", (event, todo) => {
      console.log(todo, "Data received from electron in react");
      this.setState({name:todo})
    });

    ipcRenderer.send("todo:add", "Akash");
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
