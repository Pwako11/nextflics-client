export const updateReviewForm = (name, value) =>{
    const formData= {name, value}
    return {
        type: "UPDATE_REVIEW_FORM", 
        formData: {name, value}
    }
}

export const resetReviewForm = () =>{
    return {
        type: "RESET_REVIEW_FORM"
    }
}

export const preSetFormDataForEdit = review => {
    console.log ("Action reviewForm value for review" , review)
    
    const reviewFormData = {
        content: review.attributes.content,
        rate: review.attributes.rate, 
        user_id: review.relationships.user.data.id, 
        movie_id: review.relationships.movie.data.id
    }

    return{
        type: "PRE_SET_FORM_DATA_FOR_EDIT",
        reviewFormData
    } 

} 