import React, { Component } from "react";
//An example of class components
class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick