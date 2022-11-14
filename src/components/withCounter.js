import React from "react";

//name HOCs with camelCasing
//name the new component with PascalCasing
//In HOC, a function takes a component as an argument and returns a new component
//Higher order components is used to share common functionality between components
//HOC accepts the original component and returns the new component

//in withCounter (main hf function), 
    //the wrappedComponent (original component) is passed as a param, 
    //WithCounter (new component) is returned, 

//in WithCounter (new function returned to the main function) class below: 
    //set the state, 
    //incrementcount, 
    //return wrapped component, (and send required props)

const withCounter = (WrappedComponent, incrementNumber) => {

    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          incrementCount = () => {
              this.setState(prevState => {
                  return { count: prevState.count + incrementNumber }
              })
          }

        render() {
            return(
                <WrappedComponent
                count={this.state.count} 
                incrementCount = {this.incrementCount}
                {...this.props}
                />
            ) 
        }
    }
    return WithCounter
}

export default withCounter