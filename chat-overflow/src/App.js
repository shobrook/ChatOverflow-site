import { Component } from "react";

import Button from "./components/Button";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <div id="header">
          <img id="icon" src="./logo.png" />
          <div id="links">
            <Button
              isLink
              pathToIcon="./github.png"
              href="https://github.com/shobrook/ChatOverflow"
            >
              GitHub
            </Button>
            {/*<a className="link secondary" href="https://useadrenaline.com/">
              Try Adrenaline
            </a>*/}
          </div>
        </div>
        <div id="body">
          <span id="title">ChatGPT for <span id="stackoverflow">StackOverflow</span></span>
          <span id="subtitle">See ChatGPT's response to every question on StackOverflow, even the unanswered ones.</span>
          <div id="buttons">
            <Button
              pathToIcon="./chrome.png"
            >
              Add to Chrome
            </Button>
            <Button
              isSecondary
              pathToIcon="./firefox.png"
            >
              Add to Firefox
            </Button>
          </div>
          <video id="demo" controls="controls">
            <source src="./demo.mp4" type="video/mp4" />
          </video>
        </div>
      </>
    )
  }
}
