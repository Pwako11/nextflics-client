import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Recommendations = (props) =>{

    const recommendationCards = props.recommendations.length > 0 ?  
    
    props.recommendations.map(rec => (<li><Link key={rec.id} to ={`/recommendations/${rec.id}`}> {rec.attributes.name} </Link><br/></li>)) : null
        
    return (
        <div>
            <lo>
                {recommendationCards}
            </lo>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        recommendations: state.recommendation
    }
}

export default connect(mapStateToProps) (Recommendations)