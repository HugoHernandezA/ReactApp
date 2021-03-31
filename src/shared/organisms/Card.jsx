import React from 'react';

const divStyle = {
    backgroundColor: "#D9EAF8",
    margin: "50px",
    borderRadius: "15px", 
    padding: "30px"
}

export const Card = () => {
    return (
        <React.Fragment>
            <div style={divStyle}>
            <h2>QUESTION</h2>
            <p>ANSWER</p>
            <p>ANSWER</p>
            <p>ANSWER</p>
            <p>ANSWER</p>
            </div>
        </React.Fragment>
    );
};