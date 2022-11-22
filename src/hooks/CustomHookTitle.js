import React, {useState} from 'react'
// import Input from '../components/Input'
import useCounter from './useCounter'
// import useDocumentTitle from './useDocumentTitle'

function CustomHookTitle() {

   //Managing states with custom hooks
    const [count, increment] = useCounter(5, 10)

    //Changing username with custom hooks
    // const [username, setUsername] = useState("")
    // const [urname, changeName] = useCounter(username)

    //running side effects with custom hooks
    //const [count, setCount] = useState(0)
    //all the hook below does is to update our document title based on the count value
    //useDocumentTitle(count)

  return (
    <div>
      <button onClick={increment}>increment</button>
      <h2>{count}</h2>

      {/* <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={changeName}>change name</button>
      <h1>{urname}</h1>
       {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
    </div>
  )
}

export default CustomHookTitle