import React from 'react';
import { Link, Router } from 'react-router-dom';
import temple from '../img/greek-temple2.png'


const Header = () => {
    
    return(
        <div>
           <div className="title">
               <img className="templeImage" src={temple} alt="Greek Temple"/>
               <h1>TEMPLE OF ATHENA</h1>
               </div>
            <div className="header">
                
                <Link to="/">
                    <div >
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link to="/library/mythology">
                    <div >
                        <h1>Mythology</h1>
                    </div>
                </Link>
                <Link to="/library/philosophy">
                    <div>
                        <h1>Philosophy </h1>
                    </div>
                </Link>
                <Link to="/library/art">
                    <div>
                        <h1>Art</h1>
                    </div>
                </Link>
                <Link to="/library/architecture">
                    <div>
                        <h1>Architecture</h1>
                    </div>
                </Link>
                <Link to="/library/mathematics">
                    <div>
                        <h1>Mathematics</h1>
                    </div>
                </Link>
                <Link to="/prayers">
                    <div>
                        <h1>Prayers</h1>
                    </div>
                </Link>
            
            </div>
            </div>
    )
}

export default Header;