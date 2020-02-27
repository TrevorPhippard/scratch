class PhipDom{

    constructor(){
        this.registeredListeners = {};
    }

    onComponentMount(){
        console.log(this.constructor.name + 'louded')
        window.addEventListener('click',function(e){
            if(registeredListeners[e.target.id+"CB"]){
                registeredListeners[e.target.id+"CB"]()
            }
         }.bind(this),false)
    }

    render(component, target){
        component.onComponentMount();
        this.onComponentMount();
        target.innerHTML = component.render();
    }
}

class Component{
    constructor(children){
        this.children = children;
    }

    onComponentMount(){
        console.log(this.constructor.name + 'louded')
    }

    render(){
        this.onComponentMount();
        return `<div>hello</div>`
    }

}