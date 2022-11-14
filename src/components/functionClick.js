import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log("hello")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
 //adding () makes the handler a function call
 //event handler is a function and not a function call
export default FunctionClick