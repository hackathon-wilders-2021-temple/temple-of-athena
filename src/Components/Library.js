import React, { useEffect, useState } from 'react';
import axios from "axios";
import ScrollStructure from './ScrollStructure'
import TakenScrolls from './TakenScrolls'
import Loader from "react-loader-spinner";


const Library = (props) => {

    const topic = props.match.params.subject;
    const [initialBookList,setInitialBookList] = useState([])
    const [books, setBooks]= useState("")

    useEffect(()=>{
        setBooks([])
        axios
        .get(`https://openlibrary.org/subjects/${topic}.json?published_in=0000-1800`)
        .then((res)=>{
            setBooks(res.data.works)
            setInitialBookList(res.data.works)
        })
        .catch((err)=> console.log(err))
    },[topic])
    
    const emptyBag = () =>{
        setTakenBooks([])
        setBooks(initialBookList)
    }

    const [takenBooks, setTakenBooks] = useState([]) 
    const takeScroll = ((title)=>{
        setTakenBooks([...takenBooks,title]);
        setBooks(books.filter((scroll) => scroll.title !== title));
      })

    return(

        <div className="libraryWrapper">
            <h1 className="libraryHeader">Scrolls on {topic}</h1>
            Click on a scroll to take
            <br />
            <div>{takenBooks.length > 0 && 
            <TakenScrolls 
            scroll={takenBooks} 
            emptyBag ={emptyBag }
            />}</div>
            {/* <div>{<TakenScrolls scroll={takenBooks} />}</div> */}

           { books.length > 0 ? 
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
                :
                <Loader
                    type="BallTriangle"
                    color="#9b5346"
                    height={100}
                    width={100}
                    timeout={2000} 
                />
                
            }
        </div>
    )
}

export default Library;