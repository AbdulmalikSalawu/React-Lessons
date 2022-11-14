import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList =  names.map(myName => <h2>{myName}</h2>)
    // const nameList = names.map(myName => <Person myName={myName} />)
    //In the Person component , function Person({myName}){}
    return (
        <div>{nameList}</div>
  )
}


export default NameList