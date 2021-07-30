import React from 'react' 
import Wishlist from "./Wishlist.js"
import {connect} from 'react-redux'

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <Wishlist />
        </div>
    )
}

export default MainContainer