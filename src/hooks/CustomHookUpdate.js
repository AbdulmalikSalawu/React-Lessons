import React from 'react'
import useDocumentTitle from './useDocumentTitle'

function CustomHookUpdate() {
    const [count, setCount] = useState(0)

    useDocumentTitle(count)
  return (
    <div>
       <button onClick={() => setCount(count + 5)}>{count}</button>
    </div>
  )
}

export default CustomHookUpdate