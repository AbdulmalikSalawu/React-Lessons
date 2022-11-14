import React, {useState, useEffect} from 'react'

function EffectCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // the effect function is executed AFTER EVERY RENDER of the component
    //in order to conditionally run an effect, specify the second parameter to useEffect.
    //The second parameter is the ARRAY OF VALUES that the effect hook depends on.

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
    // in the above example, the effect hook will be executed ONLY IF THE COUNT VALUE CHANGES

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={()=> setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default EffectCounter