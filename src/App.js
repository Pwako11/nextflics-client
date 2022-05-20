import React from 'react';

import './App.css';
import {connect} from "react-redux"
import {Route, withRouter, Switch} from "react-router-dom"
import {getCurrentUser} from "./actions/currentUser.js"
import {getMovies} from "./actions/movies.js"
import { updateMatchForm } from './actions/movieMatchForm';
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
import Signup from "./components/users/Signup.js"
import Login from "./components/users/Login.js"
import Logout from "./components/users/Logout.js"
import Reviews from "./components/reviews/Review.js"
import ReviewCard from "./components/reviews/ReviewCard.js"
import ReviewNewFormWrapper from "./components/reviews/ReviewNewFormWrapper.js"
import ReviewEditFormWrapper from "./components/reviews/ReviewEditFormWrapper.js"
import Recommendations from "./components/recommendations/Recommendation.js"
import RecommendationCard from "./components/recommendations/RecommendationCard.js"
import NewRecommendationForm from "./components/recommendations/NewRecommendationForm.js"
import Wishlist from "./components/wishlists/Wishlist.js"
import NewWishlistForm from "./components/wishlists/NewWishlistForm.js"
import WishlistCard from "./components/wishlists/WishlistCard.js"
import MovieShowcase from "./components/movies/MovieShowcase.js" 
import MovieMatch from "./components/movies/MovieMatch.js"
import MainContainer from "./components/MainContainer.js"
import {preSetFormDataForEdit} from "./actions/reviewForm.js"

class App extends React.Component{
  
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getMovies()
  }

  componentDidUpdate(){

    if(this.props.search !== "") { 
      console.log("here is your search value", this.props.search)
    }
    
  }


  render(){
    const {loggedIn, currentUser, wishlists, movie, recommendations, reviews, preSetFormDataForEdit} =this.props

    return (     
      <div className= "App">
        <div className ="top">
          <div className ="welcome-loggedIn" ><h3>{ currentUser ? `Welcome  ${currentUser.data.attributes.name}` : "" }</h3></div>
          <nav className="navbar navbar-light">{ loggedIn ? <NavBar location={this.props.location}/> : null }</nav>
        </div>
      
        <div className="aside">
          <div className="routes">
            <Switch>
              <Route exact path='/' render={() => loggedIn ? <MainContainer /> : <Home />} />
              <Route exact path ='movie/search' component={MovieMatch} />
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/> 
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/recommendations' component={Recommendations}/>
              <Route exact path='/recommendations/new' component={NewRecommendationForm}/>
              <Route exact path='/recommendations/:id' render={props =>{
                const recCard =  recommendations.find(rec => rec.id === props.match.params.id)
                return<RecommendationCard recommendation={recCard}{...props}/>
                }
              }/>
              <Route exact path='/recommendations/:id/edit' component={props =>{
                const recommendation =  recommendations.find(rec => rec.id === props.match.params.id)
                return<NewRecommendationForm recommendation={recommendation}{...props}/>
                }
              }/>
              <Route exact path='/reviews' component={Reviews} />
              <Route exact path='/reviews/new' component={ReviewNewFormWrapper}/>
              <Route exact path='/reviews/:id' render={props =>{
                const review =  reviews.find(review => review.id === props.match.params.id) 
                console.log( "you hit the reviews card route")           
                return<ReviewCard review={review}{...props}/>
                }
              }/>
              <Route exact path='/reviews/:id/edit' render={props =>{
                const review =  reviews.find(review => review.id === props.match.params.id)          
                review && preSetFormDataForEdit(review)
                return<ReviewEditFormWrapper review={review}{...props}/>
                }
              }/>
              <Route exact path='/wishlists' component={Wishlist}/>
              <Route exact path='/wishlists/new' component={NewWishlistForm}/>
              <Route exact path='/wishlists/:id' render={props =>{
                const card =  wishlists.find(wishlist => wishlist.id === props.match.params.id)
                return<WishlistCard card={card}{...props}/>
                }
              }/>
              <Route exact path='/wishlists/:id/edit' component={props =>{
                const card =  wishlists.find(wishlist => wishlist.id === props.match.params.id)
                return<NewWishlistForm card={card}{...props}/>
                }
              }/>
            </Switch> 
          </div>
        </div>

        <div className="moviegrid">
            
            <div className="search">
              <MovieMatch />
            </div>

            <div className="collection">
              <MovieShowcase cards= {movie} />
            </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
    recommendations: state.recommendation,
    reviews: state.review,
    wishlists: state.wishlist,
    movie: state.movies,
    search: state.movieMatchForm
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getMovies, updateMatchForm, preSetFormDataForEdit}) (App));
