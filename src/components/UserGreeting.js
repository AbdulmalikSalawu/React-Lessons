import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

  render() {
    //ternary approach
    return(
        this.state.isLoggedIn ? (
            <div>Welcome Malik</div>
        ) : (
            <div>Welcome Guest</div>
        )
        
    )

    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Malik
    //         </div>
    //     )
    // } else {
    //     return <div>Welcome guest</div>
    // }
    
  }
}

export default UserGreeting