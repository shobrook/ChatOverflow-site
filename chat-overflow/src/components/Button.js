import { Component } from "react";

import "./Button.css";

export default class Button extends Component {
  render() {
    const { pathToIcon, isSecondary, isLink, href, children } = this.props;

    return (
      <a
        className={`button ${isSecondary ? "secondary" : ""} ${isLink ? "link" : ""}`}
        href={href}
        target="_blank"
      >
        <img className="icon" src={pathToIcon} />
        <span>{children}</span>
      </a>
    );
  }
}
