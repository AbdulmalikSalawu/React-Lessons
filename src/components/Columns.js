import React from 'react'

function Columns() {
    // const items = []
  return (
    // you can't pass in the key attribute when using <>
    <>
        {/* {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        } */}
        <td>Name</td>
        <td>Malik</td>
    </>
  )
}

export default Columns