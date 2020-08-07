//setup the data layer for Context API
//We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is the DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER | You don't have to know this code's meaning, copy paste in every project u do
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);