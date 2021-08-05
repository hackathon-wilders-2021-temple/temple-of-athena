import React from 'react';
import { Link, Router } from 'react-router-dom';


const HomeMenu = () => {
    
    return(
            
            <div>

<Link to="/">
                <div >
                <h1>
                    Home
                </h1>
                </div>
                </Link>
                <Link to="/library/mythology">
                <div >
                <h1>
                    Mythology
                </h1>
                </div>
                </Link>
                <Link to="/library/philosophy">
                <div>
                <h1>
                    Philosophy
                </h1>
                </div>
                </Link>
                <Link to="/library/art">
                <div>
                <h1>
                    Art
                </h1>
                </div>
                </Link>
                <Link to="/library/architecture">
                <div>
                <h1>
                    Architecture
                </h1>
                </div>
                </Link>
                <Link to="/library/math">
                <div>
                Math
                </div>
                </Link>
                <Link to="/library/prayer">
                <div>
                Prayer
                </div>
                </Link>

            </div>
    )
}

export default HomeMenu;