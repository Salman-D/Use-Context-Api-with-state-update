import { GlobalProvider, GlobalContext } from "./Store/GlobalState"
import React, { useContext } from "react"

const UpdateData = () => {
    const { count, DecreamentData } = useContext(GlobalContext)
    console.log(count, DecreamentData)
    return (
        <>
         {/* <h1>{count}</h1> */}
            
            <button onClick={() => DecreamentData()}>Decreament Data Value</button>
        </>

    )
}

export default UpdateData