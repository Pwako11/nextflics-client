export default function review (state = [], action) {
    switch (action.type) {
        case "SET_REVIEW":
            return action.review
        case "ADD_REVIEW":
                return state.concat(action.review)
        case "CLEAR_REVIEW":
            return []
        case "UPDATE_REVIEW":
            console.log("in update Review Action is ", action.review)
            return state.map(review => review.id === action.review.id? action.review : review)
        case "DELETE_REVIEW":
            return state.filter(review => review.id === action.reviewId ? false : true)
        default:
            return state 
    }   
   }