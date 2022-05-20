export default function recommendation (state = [], action) {
    switch (action.type) {
        case "SET_RECOMMENDATION":
            return action.recommendation
        case "ADD_RECOMMENDATION":
                return state.concat(action.recommendation)
        case "CLEAR_RECOMMENDATION":
            return []
        case "DELETE_RECOMMENDATION":
            return state.filter(recommendation => recommendation.id === action.recommendationId ? false : true)
        default:
            return state 
    }   
   }