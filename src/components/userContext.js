import React from "react";

//1. Creating the context using createContext() method from React
//2. Export the provider and consumer components

const UserContext = React.createContext('Codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

//Provider component provides the value to all the descending components

export { UserProvider, UserConsumer}
