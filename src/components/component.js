class Component {
  constructor(props = {}) {
    this.props = props
  }

  createDOM(domString) {
    const div = document.createElement("div")
    div.innerHTML = domString
    return div
  }

  reRender() {
    const oDom = this.domElement
    this.domElement = this._render()
    this.wrapper.insertBefore(this.domElement, oDom)
    this.wrapper.removeChild(oDom)
  }

  _render(wrapper) {
    if (wrapper) this.wrapper = wrapper
    this.domElement = this.createDOM(this.render())
    this.domElement.addEventListener("click", () => {
      this.handleAdd()
    }, false)

    return this.domElement
  }
}

export default Component;
