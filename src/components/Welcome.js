import React, { Component } from 'react'
//An example of class components

//destructuring in class method
class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h3>Welcome {name} a.k.a {heroName}</h3>
    }
}
export default Welcome