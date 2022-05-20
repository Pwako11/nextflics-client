import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Recommendations = ({recommendations, history} ) =>{

    console.log("you're in Recommendation", recommendations)

    let path;

    if (typeof history === 'undefined'){
        path = ""
    }else{
        path = history.location.pathname
    };

    console.log("you're in Recommendation-path", path)

    const recommendationHeading =  path === "/recommendations" ? <h5>Here is your movie recommendation list. Select a movie for more options</h5> : "" ;
    
    const recommendationCards = recommendations.length > 0 ?  
    
    recommendations.map(rec => (<li><Link key={rec.id} to ={`/recommendations/${rec.id}`}> {rec.attributes.name} </Link><br/></li>)) : null
        
    return (
        <div className="recommendations">
            <div className="container-xxl">
                {recommendationHeading}
            
                <ol>
                    {recommendationCards}
                </ol>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        recommendations: state.recommendation,
    }
}

export default connect(mapStateToProps) (Recommendations)