import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}
//  reducer function accepts 2 values: (current state, and action. They're the parameters to the reducer function) and returns one value (new state), which depends on the action
//  action is the instruction to the reducer function

function ReducerCounter() {
    const [count, dispatch] = useReducer(reducer, initialState)

//  useReducer accepts two values, the reducer function, and the initial state
//  useReducer returns a pair of value which we can get hold of using the array destructuring syntax
//  in the above, count is the current state
//  dispatch is used to execute the appropriate actions, based on the button the user clicks
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
  // the argument to the dispatch method is the action specified in the reducer function
}

export default ReducerCounter