class Btn extends Component {

    onClick(cb){
        registeredListeners[this.constructor.name+"CB"] = cb
    }

    onComponentMount(){
        console.log(this.constructor.name + 'louded')
        this.onClick(function(){
            console.log('btn callback function')
        })  
    }

    render(){
        this.onComponentMount();
        return `<button id="Btn">${ this.children }</button>`
    }
}