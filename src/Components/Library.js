import React, { useEffect, useState } from 'react';
import axios from "axios";
import ScrollStructure from './ScrollStructure'


const Library = (props) => {

    const topic = props.match.params.subject;
    const [books, setBooks]= useState([])

    useEffect(()=>{

        axios
        .get(`https://openlibrary.org/subjects/${topic}.json?published_in=0000-1800`)
        .then((res)=>{
            setBooks(res.data.works)
            console.log(res.data.works)
        })
        .catch((err)=> console.log(err))
    },[topic])
    
    

    return(

        
        <div className="libraryWrapper">
            <h1 className="libraryHeader">Scrolls on {topic}</h1>
            <div className="scrollWrapper">
                {books.map((item, i)=>
                <ScrollStructure 
                key={i}
                name={item.title}
                authorsName={item.authors[0].name}
                subject={item.subject.splice(0,3)}
                />
                )}
            </div>
        </div>
    )
}

export default Library;