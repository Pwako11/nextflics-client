import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Recommendations = (props) =>{

    const recommendationCards = props.recommendations.length > 0 ?  
    
    props.recommendations.map(rec => (<><Link key={rec.id} to ={`/recommendations/${rec.id}`}> {rec.attributes.name} </Link><br/></>)) : null
        
    return (
        <div>
            {recommendationCards}
        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        recommendations: state.recommendation
    }
}

export default connect(mapStateToProps) (Recommendations)