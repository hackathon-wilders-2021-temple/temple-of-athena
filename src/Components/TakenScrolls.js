import React from 'react';

const TakenScrolls =(props)=> {
    
    return (

        <div className="scrollBag">
            <b>Scrolls taken:</b>
            {props.scroll.map((title)=>{return `${title}, `})}
        </div>

)
}

export default TakenScrolls;