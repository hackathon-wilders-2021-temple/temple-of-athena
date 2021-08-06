import React from 'react';

const ScrollStructure =(props)=> {
    
    return (

        <div className="scroll" id={props.key} onClick={()=> props.takeScroll(props.name)}>
            <div className="bookInfo">
                <span className="scrollText"><b>{props.name}</b></span>
                <span className="scrollText">Author: {props.authorsName}</span>
                <br />
                <span className="scrollText smallText">{props.subject[1]}</span>
            </div>
        </div>

)
}

export default ScrollStructure;