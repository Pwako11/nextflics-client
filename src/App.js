import React from 'react';

import './App.css';
import {connect} from "react-redux"
import {Route, withRouter, Switch} from "react-router-dom"
import {getCurrentUser} from "./actions/currentUser.js"
import {getMovies} from "./actions/movies.js"
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
import Signup from "./components/Signup.js"
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import Reviews from "./components/Review.js"
import ReviewCard from "./components/ReviewCard.js"
import ReviewForm from "./components/ReviewForm.js"
import ReviewNewFormWrapper from "./components/ReviewNewFormWrapper.js"
import ReviewEditFormWrapper from "./components/ReviewEditFormWrapper.js"
import Recommendations from "./components/Recommendation.js"
import RecommendationCard from "./components/RecommendationCard.js"
import NewRecommendationForm from "./components/NewRecommendationForm.js"
import Wishlist from "./components/Wishlist.js"
import NewWishlistForm from "./components/NewWishlistForm.js"
import WishlistCard from "./components/WishlistCard.js"
import MovieShowcase from "./components/MovieShowcase.js" 
import MainContainer from "./components/MainContainer.js"
import {preSetFormDataForEdit} from "./actions/reviewForm.js"

class App extends React.Component{
  
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getMovies()
  }

  render(){
    const {loggedIn, currentUser, wishlists, movie, recommendations, reviews, preSetFormDataForEdit} =this.props
 
    return (     
      <div className= "App">
        <p>{ currentUser ? `Welcome  ${currentUser.data.attributes.name}` : "" }</p>  
        { loggedIn ? <NavBar location={this.props.location}/> : null }
        
        <Switch>
          <Route exact path='/' render={() => loggedIn ? <MainContainer /> : <Home />} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/> 
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/recommendations' component={Recommendations}/>
          <Route exact path='/recommendations/new' component={NewRecommendationForm}/>
          <Route exact path='/recommendations/:id' render={props =>{
            const recommendation =  recommendations.find(rec => rec.id === props.match.params.id)
            return<RecommendationCard recommendation={recommendation}{...props}/>
            }
          }/>
          <Route exact path='/recommendations/:id/edit' component={props =>{
            const recommendation =  recommendations.find(rec => rec.id === props.match.params.id)
            
            return<NewRecommendationForm recommendation={recommendation}{...props}/>
            }
          }/>

          <Route exact path='/reviews' component={Reviews} />
          <Route exact path='/reviews/new' component={ReviewNewFormWrapper }/>
          <Route exact path='/reviews/:id' render={props =>{
            const review =  reviews.find(review => review.id === props.match.params.id)
            return<ReviewCard review={review}{...props}/>
            }
          }/>
           <Route exact path='/reviews/:id/edit' component={props =>{
            const review =  reviews.find(review => review.id === props.match.params.id)
            
            console.log("edit path review", review)
            // preSetFormDataForEdit(review)
            return<ReviewEditFormWrapper review={review}{...props}/>
            }
          }/>

          <Route exact path='/wishlist' component={Wishlist}/>
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
        <div className="Movies" >
          <MovieShowcase cards= {movie} />
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
    recommendations: state.recommendation,
    reviews: state.review,
    wishlists: state.wishlist,
    movie: state.movies
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getMovies, preSetFormDataForEdit}) (App));
