import React from "react";
//An example of functional components

//destructuring in the parameter: const Greet = ({name, heroName}) =>{}
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h3>
                Hello {name} a.k.a {heroName}
            </h3>
            {/* {props.children} */}
        </div>
    ) 
}
 
export default Greet