import React from 'react';
import NameCard  from "../NameCard/NameCard";
import './ResultContainer.css'

const ResultContainer = ({suggestedNames}) =>{

    const suggestedNamesList = suggestedNames.map((name) => {
        return <NameCard key= {name} suggestedName={name} />
    });

    return (
        <div className="results-container">
            <div className="result-card">{suggestedNamesList} </div>
        </div>
    )

}

export default  ResultContainer;
