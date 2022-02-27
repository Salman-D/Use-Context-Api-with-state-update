import { GlobalProvider, GlobalContext } from "./Store/GlobalState"
import React, { useContext } from "react"

const Reset_data = () => {
    const { count, Reset } = useContext(GlobalContext)
    console.log(count, Reset)
    return (
        <>
         {/* <h1>{count}</h1> */}
            
            <button onClick={() => Reset()}>Reset</button>
        </>

    )
}

export default Reset_data