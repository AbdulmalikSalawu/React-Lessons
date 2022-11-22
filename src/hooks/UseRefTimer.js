import React, {useState, useEffect, useRef} from 'react'

//useRef can be used to create a generic container to hold a mutable value

function UseRefTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1)
      }, 1000)
      return () => {
        clearInterval(intervalRef.current)
      };
    }, [])
    
  return (
    <div>
        {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>PAUSE</button>
    </div>
  )
}

export default UseRefTimer