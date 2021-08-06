import React, { useEffect, useState } from 'react';
import axios from "axios";
import ScrollStructure from './ScrollStructure'
import TakenScrolls from './TakenScrolls'


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
    

    const [takenBooks, setTakenBooks] = useState([]) 
    const takeScroll = ((title)=>{
        console.log(title);
        title === books.title && setTakenBooks(takenBooks.push(title));
        setBooks(books.filter((scroll) => scroll.title !== title));
        console.log(takenBooks);
      })

    return(

        <div className="libraryWrapper">
            <h1 className="libraryHeader">Scrolls on {topic}</h1>

            <div>{takenBooks.length > 0 && <TakenScrolls scroll={takenBooks} />}</div>
            {/* <div>{<TakenScrolls scroll={takenBooks} />}</div> */}

            <div className="scrollWrapper">
                {books.map((item, i)=>
                <ScrollStructure 
                key={i}
                name={item.title}
                authorsName={item.authors[0].name}
                subject={item.subject.filter((item)=>!item.includes("_")).splice(0,5)}
                available={item.availability && item.availability['available_to_borrow']}
                takeScroll={takeScroll}
                />
                )}
            </div>
        </div>
    )
}

export default Library;