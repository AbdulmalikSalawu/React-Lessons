import React, {useState} from 'react'
import EffectMouse from './EffectMouse'

//Context provides a way to pass data through the component tree without having to pass props down manually at every level
// useReducer is used for state management
// useReducer accepts two parameters (reducer, initialState)


function EffectCleanup() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <EffectMouse />}

    </div>
    //the above means:
    //if it's displayed(set to true), return the <EffectMouse /> 
    //onclick of the button, set the display to false, then, this will return the return statement at the <EffectMouse /> useEffect.
  )
}

export default EffectCleanup