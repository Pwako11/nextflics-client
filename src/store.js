import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import usersReducer from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import wishlist from './reducers/wishlist.js';
import signupForm from  './reducers/signupForm.js';
import newWishlistForm from './reducers/newWishlistForm.js';
import movieReducer from './reducers/movies.js';
import movieMatchForm from './reducers/movieMatchForm.js'
import review from './reducers/review.js';
import reviewForm from './reducers/reviewForm.js';
import recommendation from './reducers/recommendation.js';
import newRecommendationForm from './reducers/newRecommendationForm.js';

const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    wishlist, 
    signupForm, 
    newWishlistForm,
    recommendation,
    newRecommendationForm,
    review, 
    reviewForm,
    movieMatchForm,
    movies: movieReducer
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
