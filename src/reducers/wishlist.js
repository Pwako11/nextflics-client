export default (state = [], action) =>{
    switch (action.type) {
        case "SET_WISHLIST":
            return action.wishlist
        case "ADD_WISHLIST":
                return state.concat(action.wishlist)
        case "CLEAR_WISHLIST":
            return []
        default:
            return state 
    }   
   }