  export function add () {
    console.log('add was called')
    return {
      type: 'ADD'
    }
  }
  export function reduce () {
    return {
      type: 'REDUCE'
    }
  }