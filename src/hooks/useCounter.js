import {useState} from 'react'

function useCounter(initialCount = 0, value) {
    const[count, setCount] = useState(initialCount)
    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

  return [count, increment]

}
// function useCounter(theirname) {
//   const[urname, setUrName] = useState({})
//   const changeName = () => {
//       setUrName(theirname)
//   }

// return [urname, changeName]

// }



export default useCounter