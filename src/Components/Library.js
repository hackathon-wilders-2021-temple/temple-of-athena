import React from 'react';
import axios from "axios";


const Library = (props) => {

    const params = props.match.params;


    console.log(params)
    
    return(
        <div>
            <h1>This is Library</h1>
        </div>
    )
}

export default Library;