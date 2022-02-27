import { GlobalProvider, GlobalContext } from "./Store/GlobalState"
import React, { useContext } from "react"

const UpdateData = () => {
    const { count, IncData } = useContext(GlobalContext)
    console.log(count, IncData)
    return (
        <>
         <h1>{count}</h1>
         
            <button onClick={() => IncData()}>Update Value</button>
        </>

    )
}

export default UpdateData