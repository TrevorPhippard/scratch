class App extends Component {
    render(){
        return `<div>
                    ${new Header('header').render()}
                    ${new Btn('test').render()}
                 </div>`
    }
}

var registeredListeners = {};

window.onload = function(){
    PhipDom = new PhipDom;
    PhipDom.render(new App, document.getElementById('root'))
}