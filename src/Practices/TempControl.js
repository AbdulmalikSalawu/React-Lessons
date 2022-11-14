import React, {useState, useEffect} from 'react'
import './styles.css'

function TempControl() {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if(count>60 || count<-5){
        alert('limit exceeded')
    }
    }, [count])

    const increment = () => {
        setCount(prevCount => prevCount+3)
    }
    const decrement = () => {
        setCount(prevCount => prevCount-3)
    }

  return (
    <div>
        <h1>Temperature Checker</h1>
        <div className='container'>
            <div className={`${(count <15)? 'verycold': (count <=30)? 'degree' : (count<40)? 'normal' : 'hot'}`}>
                <p>{count} C</p>
                <h3 
                    className='condition'>
                    {`${(count <15)? 'Very cold':(count<=30)? 'Cold': (count<40)? 'Normal' : 'Hot'}`}
                </h3>
            </div>
            <div className='buttoncont'>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
        {/* <input value={count} onChange={e => setCount(e.target.value)} /> */}
        {/* <button onClick={checker}>Check</button> */}
    </div>
  )
}

export default TempControl