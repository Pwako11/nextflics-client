import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import usersReducer from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import wishlist from './reducers/wishlist.js';
import signupForm from  './reducers/signupForm.js';
import newWishlistForm from './reducers/newWishlistForm.js';

const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    wishlist, 
    signupForm, 
    newWishlistForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store