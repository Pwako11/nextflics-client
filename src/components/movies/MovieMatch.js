import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateMatchForm} from '../../actions/movieMatchForm.js'


const MovieMatchForm = ({movieMatchForm, updateMatchForm, movieList}) =>{


    const [showResults, setShowResults] = React.useState(false)

    let searchValue = movieMatchForm.content.trim().toLowerCase();

    const filteredMovies = searchValue !== '' ? movieList.filter(movie =>{
        return movie.attributes.title.toLowerCase().includes(searchValue)
    }) : null ;

    const searchHeading = filteredMovies !== null ? <h5>Here are items matching your Search</h5> : <h5>No search matches were found</h5>

    const movieCards = filteredMovies !== null ?  filteredMovies.map(m => (
        <li>
            <Link key={m.id} to ={`#${m.attributes.title}`}> {m.attributes.title} </Link><br/>
        </li> 
        )
    ) : null

    console.log({filteredMovies})
    console.log({movieCards})

    const Results = () => (

        <div className='searchResults'>
                {searchHeading }
                
            <ol className= "movieSearchResults">
                {movieCards}
            </ol>
        </div>
    )
            
    const handleChange = (event) =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...movieMatchForm,
                [name]: value
        }
        updateMatchForm(updatedFormInfo)
        
    };


    // const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    // <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    // </svg>;

    // const placement = `search ... ${searchIcon}`

    return(

        <div className='mainSearch'>
            
            <div className='searchForm' >
                <form id= "searchBox" onSubmit={event =>{
                    event.preventDefault()
                    console.log("Submit was fired")
                    Results()
                    setShowResults(true)
                }}>
                    <div className = "tb">
                        <div className='td'>
                            <input name= "content" placeholder="Search..." onChange={handleChange} type = "text" value= {movieMatchForm.content} />
                        </div>
                        <div class="td" id="s-cover">    
                            <button id="searchSubmit" type="submit">
                                <div id="s-circle"></div>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
            {showResults ? < Results /> : null }    
        </div> 

    ) 

}

const mapStateToProps = state =>{

    return {
        movieList: state.movies,
         movieMatchForm: state.movieMatchForm
     }
}

export default connect(mapStateToProps, {updateMatchForm}) (MovieMatchForm);