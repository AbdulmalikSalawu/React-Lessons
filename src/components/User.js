import React, { Component } from 'react'

//Render prop is a technique for sharing code between React components using a prop  whose value is a function.

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name(false)}
      </div>
    )
  }
}

export default User