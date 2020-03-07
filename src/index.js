import AddButton from "./components/AddButton.js";

const ReactDom = {
  render(component, wrapper) {
    wrapper.appendChild(component._render(wrapper));
  }
};

window.onload = function() {
  ReactDom.render(new AddButton(), document.getElementById("root"));
};
