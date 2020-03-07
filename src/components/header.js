import { Component } from "./hub.js";

class Header extends Component {
  render() {
    this.onComponentMount();
    return `<h1>${this.children}</h1>`;
  }
}

export default Header;
