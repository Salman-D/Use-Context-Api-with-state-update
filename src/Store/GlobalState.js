import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const InitalState = {
    count: 0
}

//craete Context
export const GlobalContext = createContext(InitalState)

//provider
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, InitalState)

    function IncData() {
        console.log("Inc Data 2")
        dispatch({
            type: "Counter_INC",
            data : "difficult"
        })
      
    }

    function DecreamentData() {
        console.log("Decreament 2")
        dispatch({
            type: "Counter_Decreament",
            data : "Easy"
        })
      
    }
    function Reset() {
        console.log("Reset")
        dispatch({
            type: "Counter_Reset",
            data : "Common"
        })
      
    }

    return (
        <GlobalContext.Provider
            value={{
                count: state.count,
                IncData ,
                DecreamentData,
                Reset

            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}