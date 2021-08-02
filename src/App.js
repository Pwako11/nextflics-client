import React from 'react';

import './App.css';
import {connect} from "react-redux"
import {Route, withRouter} from "react-router-dom"
import {getCurrentUser} from "./actions/currentUser.js"
import {getMovies} from "./actions/movies.js"
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
import Signup from "./components/Signup.js"
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import Wishlist from "./components/Wishlist.js"
import NewWishlistForm from "./components/NewWishlistForm.js"
import WishlistCard from "./components/WishlistCard.js"
import MovieShowcase from "./components/MovieShowcase.js" 
import MainContainer from "./components/MainContainer.js"
import currentUser from './reducers/currentUser';

class App extends React.Component{
  
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getMovies()
  }

  render(){
    const {loggedIn, currentUser, wishlists, movies} =this.props

console.log ( "in App movies", movies)  
    return (     
      <div className= "App">
        <p>{ currentUser ? `Welcome  ${currentUser.data.attributes.name}` : "" }</p>  
        { loggedIn ? <NavBar location={this.props.location}/> : null }
        
        <switch>
          <Route exact path='/' render={() => loggedIn ? <Wishlist/> : <Home />} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/wishlist' component={Wishlist}/>
          <Route exact path='/wishlist/new' component={NewWishlistForm}/>
          <Route exact path='/wishlist/:id' component={props =>{
            const card =  wishlists.find(wishlist => wishlist.id === props.match.params.id)
            return<WishlistCard card={card}{...props}/>
            }
          }/>
          <Route exact path='/wishlist/:id/edit' component={props =>{
            const card =  wishlists.find(wishlist => wishlist.id === props.match.params.id)
            return<NewWishlistForm card={card}{...props}/>
            }
          }/>

        </switch>
        <div className="Movies" >
          <MovieShowcase cards= {movies} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State in App", state)
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
    wishlists: state.wishlist,
    movies: state.movies
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getMovies}) (App));
