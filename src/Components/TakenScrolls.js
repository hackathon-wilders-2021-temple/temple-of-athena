import React from 'react';

const TakenScrolls =(props)=> {
    
    return (
        <div className="scrollBag">
            <b>Scrolls Taken</b>
            <div className="titlesInBag">
                <i>{props.scroll.map((title)=>{return `${title}, `})}</i>
            </div>
            <div><br />
                <span className="removeScroll" onClick={()=>props.emptyBag()} style={{cursor: "pointer"}}>Empty Bag</span>
            </div>
        </div>
)
}

export default TakenScrolls;
