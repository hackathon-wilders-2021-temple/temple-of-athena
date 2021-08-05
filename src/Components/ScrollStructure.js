import React from 'react';

const ScrollStructure =(props)=> {
    
    return (

        <div className="scroll" id={props.id}>
            <div className="bookInfo">
                <span className="scrollText"><b>{props.name}</b></span>
                <span className="scrollText">{props.authorsName}</span>
                <span className="scrollText smallText">{props.subject[0]}</span>
                <span className="scrollText smallText">{props.subject[1]}</span>
                <span className="scrollText smallText">{props.subject[2]}</span>
                <span className="scrollText">{props.borrow}</span>
            </div>
        </div>

)
}

export default ScrollStructure;