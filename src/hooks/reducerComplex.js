import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

//the default value of state is the initial state above.
//reducer function accepts 2 values: (current state, and action. They're the parameters to the reducer function) and returns one value (new state), which depends on the action


const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return  {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return  {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerComplex() {
    const [count, dispatch] = useReducer(reducer, initialState)

//  useReducer returns a pair of value which we can get hold of using the array destructuring syntax
// in the above, count is the current state
//  dispatch is used to execute the appropriate actions, based on the button the user clicks

  return (
    <div>
        <div>{count.firstCounter}</div>
        <div>{count.secondCounter}</div>

        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>

        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment 2nd</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement 2nd</button>
    </div>
  )
  // the argument to the dispatch method is the action specified in the reducer function
}

export default ReducerComplex