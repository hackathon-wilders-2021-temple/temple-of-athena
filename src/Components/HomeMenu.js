import React from 'react';
import { Link, Router } from 'react-router-dom';


const HomeMenu = () => {
    
    return(
            
        <div className="homeWrapper">
            <div className="homeMenu" id="menuLink">
                <div className="linksWrapper">
                    <Link to="/library/mythology">
                       <span>mythology</span>
                    </Link>
                    <Link to="/library/philosophy">
                       <span>philosophy</span>
                    </Link>
                    <Link to="/library/art">
                       <span>art</span>
                    </Link>
                    <Link to="/library/architecture">
                       <spawn>architecture</spawn>
                    </Link>
                    <Link to="/library/mathematics">
                       <span>mathematics</span>
                    </Link>
                    <Link to="/prayers">
                       <span>Oracle</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeMenu;
