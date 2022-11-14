import React, {useState, useEffect} from 'react'

function HookIntervalCount() {
    const [count, setCount] = useState(0)
  
    const tick = () => {
        setCount(count + 1)
    }

    //if there are multiple effects to run, make sure to separate them out instead of having all the codes in a single use effect

    //passing an empty array [ ] makes the useEffect to only run once after the inital render 

    useEffect(() => {
      const interval = setInterval(tick, 1000)
      return () => {
        clearInterval(interval)
      }
    }, [count])

    //when u need to call a function within useEffect, define the function within useEffect
    
    // const [someProp, setsomeProp] = useState(2)
    // useEffect(() => {
    //   function doSomething() {
    //     console.log(someProp)
    //     }
    //      doSomething()
    // }, [someProp])
    
  return (
    <div>
        {count}
    </div>
  )
}

export default HookIntervalCount