function reducers (state, action) {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          num: state.num + 1
        }
      case 'REDUCE':
        return {
          ...state,
          num: state.num - 1
        }
      default:
        return state
    }
  }

function createStore (initStore = {}, reducer) {
    let state = initStore
    const registeredListeners = []
  
    const getState = () => state
  
    const dispatch = (action) => {
      state = reducer(state, action)
      registeredListeners.forEach((listener) => {
        listener(state)
      })
    }
  
    const subscribe = (fn) => {
      registeredListeners.push(fn)
      return function unsubscribe () {
        registeredListeners = registeredListeners.filter((listener) => fn !== listener)
      }
    }
  
    return {
      getState,
      dispatch,
      subscribe
    }
  }

const initStore = {
    num: 0
}

export let store = createStore(initStore, reducers)
