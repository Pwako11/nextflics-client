import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
// import movies from '../../reducers/movies'

const wishlist = ({wishlists, history}) => {
    let path; 
    
    if (typeof history === 'undefined'){
        path = ""
    }else{
        path = history.location.pathname
    };
 
    const wishlistHeading =  path === "/wishlists" ? <h5>Here is your movie wishlist. Select a movie for more options</h5> : "" ;

    const wishlistCards = wishlists.length > 0 ? 
    wishlists.map(list =>(<li> <Link key={list.id} to={`/wishlists/${list.id}`}> {list.attributes.name} </Link><br/></li>)) : null
    
    return (

        <div className= "wishlist">
            <div className="container-xxl">
                {wishlistHeading}
                <ol>
                    {wishlistCards}
                </ol>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        wishlists: state.wishlist,
    }
}

export default connect(mapStateToProps)(wishlist)