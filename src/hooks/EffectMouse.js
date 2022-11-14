import React, {useState, useEffect} from 'react'

function EffectMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    //effect is called after every render unless we specify the dependency array 
    // when we specify the array(as empty), it runs the effect only on initial render

   useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
          console.log('component unmounting code')
          window.removeEventListener('mousemove', logMousePosition)
        }
        //the return function above will be executed whenever the component will unmount.
   }, [])
    

  return (
    <div>
        Hooks x - {x} Y - {y}
    </div>
  )
}

export default EffectMouse