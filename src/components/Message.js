import React, { Component } from 'react'
//Class Component
class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message