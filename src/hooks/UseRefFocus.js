import React, {useEffect, useRef} from 'react'

function UseRefFocus() {
    //useRef makes it possible to access DOM nodes directly within functional components
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    

  return (
    <div>
        <input ref={inputRef} type='text' />
    </div>
  )
}

export default UseRefFocus