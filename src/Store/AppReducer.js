const  AppReducer = (state,dispatch)=>{
    console.log(state,dispatch)
    switch(dispatch.type){
        case "Counter_INC":
            return{
                ...state,
                count : state.count+1
            }
        case "Counter_Decreament":
            return{
                ...state,
                count : state.count-1
            }
        case "Counter_Reset":
                return{
                    ...state,
                    count : state.count*0
                }
        default:
            return state


    }
    // switch()
}
export default AppReducer