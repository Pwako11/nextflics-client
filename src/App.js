import React from 'react';

import './App.css';
import {connect} from "react-redux"
import {Route, withRouter} from "react-router-dom"
import {getCurrentUser} from "./actions/currentUser.js"
// import {getMovies} from "./actions/movies.js"
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
import Signup from "./components/Signup.js"
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import Wishlist from "./components/Wishlist.js"
import NewWishlistForm from "./components/NewWishlistForm.js"
import MovieShowcase from "./components/MovieShowcase.js" 
import MainContainer from "./components/MainContainer.js"
import currentUser from './reducers/currentUser';

class App extends React.Component{
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const {loggedIn} =this.props
    const {currentUser} = this.props
  
    return (     
      <div className= "App">
        <p>{ currentUser ? `Welcome  ${currentUser.data.attributes.name}` : "" }</p>  
        { loggedIn ? <NavBar /> : null }
        <MovieShowcase />
        <switch>
          <Route exact path='/' render={() => loggedIn ? <Wishlist/> : <Home />} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/wishlist' component={Wishlist}/>
          <Route exact path='/wishlist/new' component={NewWishlistForm}/>
        </switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser}) (App));
