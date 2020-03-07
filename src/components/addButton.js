import Component from './component.js';
import { add } from '../actions/index.js';
import { store } from '../store.js';

class AddButton extends Component {
    constructor(props) {
      super(props)
      this.id = 'button'
    }
  
    handleAdd() {
      store.dispatch(add())
      this.reRender()
    }
  
    render() {
        const num = store.getState().num
        return `<button id="btn">${num}</button>`
    }
  }

  export default AddButton;
