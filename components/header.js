class Header extends Component {
    render(){
        this.onComponentMount();
        return `<h1>${ this.children }</h1>`
    }
}