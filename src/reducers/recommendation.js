export default (state = [], action) =>{
    switch (action.type) {
        case "SET_RECOMMENDATION":
            return action.recommendation
        case "ADD_RECOMMENDATION":
                return state.concat(action.recommendation)
        case "CLEAR_RECOMMENDATION":
            return []
        default:
            return state 
    }   
   }