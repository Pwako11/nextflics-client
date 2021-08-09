export default (state = [], action) =>{
    switch (action.type) {
        case "SET_REVIEW":
            return action.review
        case "ADD_REVIEW":
                return state.concat(action.review)
        case "CLEAR_REVIEW":
            return []
        case "UPDATE_REVIEW":
            console.log("in UPDATE TRIP Action is ", action)
            return state
        default:
            return state 
    }   
   }