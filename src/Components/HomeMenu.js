import React from 'react';
import { Link, Router } from 'react-router-dom';


const HomeMenu = () => {
    
    return(
            
        <div className="homeWrapper">
            <div className="homeMenu">
                <Link to="/library/mythology">
                        <span className="menuLink">mythology</span>
                </Link>
                <Link to="/library/philosophy">
                        <span className="menuLink">philosophy</span>
                </Link>
                <Link to="/library/art">
                        <span className="menuLink">art</span>
                </Link>
                <Link to="/library/architecture">
                        <span className="menuLink">architecture</span>
                </Link>
                <Link to="/library/mathematics">
                        <span className="menuLink">mathematics</span>
                </Link>
                <Link to="/prayers">
                        <span className="menuLink">prayer</span>
                </Link>
            </div>
        </div>
    )
}

export default HomeMenu;