import React, {useState} from 'react'

const initialState = 5
const reducer = (count, action) => {
  switch(action) {
    case 'increment': return state+1
    case 'decrement': return state+1
    case 'reset': return initialState
  }
}

function Practice() {
const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Practice