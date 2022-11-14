import React from "react";

const Hello = () => {
    // return (
    // <div className = 'dummyClass'></div>
    //     <h1>Hello Yemi</h1>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Malik' )
    )
}

export default Hello