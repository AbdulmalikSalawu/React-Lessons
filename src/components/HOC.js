import React, { Component } from 'react'
import withCounter from './withCounter'

class HOC extends Component {

  render() {
    const {count, incrementCount} = this.props
    return <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
  }
}
// we export the "updated main hf function" from "withCounter.js",  passing in (HOC) as a param

export default withCounter(HOC, 5)
