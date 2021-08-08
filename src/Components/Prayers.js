import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from "react-loader-spinner";



const Prayers = () => {

    const [wish,setWish] = useState("")
    const [goddessResponse,setGoddessResonse] = useState("")
    const [sendResponse,setSendResponse] =useState(false)
    
    
   const handleWishes = (e)=>{
    setSendResponse(true)
    setTimeout(()=>{
        const options = {
            method: 'POST',
            url: 'https://magic-8-ball.p.rapidapi.com/8-ball',
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-key': `${process.env.REACT_APP_MAGICBALL_API}`,
              'x-rapidapi-host': 'magic-8-ball.p.rapidapi.com'
            },
            data: {question: `${wish}`}
          };
    
          axios.request(options)
           .then((res=> {
               setSendResponse(false)
               setGoddessResonse(res.data.body.answer)
               setWish('')
               
            }))
           .catch((err)=>{
               console.log(err)
               setGoddessResonse("It seems like Athena is busy right now, please come back later.")
            })
    },2000)

    
   }

    return(
    <div className="prayersContainer">
        <h1 className="libraryHeader">Athena's Oracle</h1>
        <div className='prayersWrapper'>
             <div className="athenaImage">
                <img className="imgAthena" src="https://www.maxpixel.net/static/photo/2x/Sculpture-Austria-Vienna-Monument-Statue-Athena-91432.jpg" alt="Athena" />
             </div>
            <div className="InputContainer">
                <div className="inputPrayer" >
                    <b>Pray to our Goddess of Wisdom</b><br />
                    <h3 className="InputDetails" htmlFor="text" >
                    Close your eyes and concetrate<br/> on your question. 
                    When your are ready, make it known to our Goddess. <br />
                    Pray and wait for Athena's response </h3><br />
                    <input autocomplete="off" className="InputDetails input" id="wish" type="text" value={wish}onChange={(e)=>setWish(e.target.value)}/>
                    <button className="CuteButton" onClick={()=>handleWishes()}> Ask Athena!</button>
                </div>
                <div className="AthenaResponse">
                    {/* <h1> {wish ? wish : "" } </h1> */}
                    <h2 className="response"> Athena's response: </h2>
                    { sendResponse ? 
                        <Loader
                        type="BallTriangle"
                        color="#9b5346"
                        height={100}
                        width={100}
                    /> :
                    <h1 className="response2">{goddessResponse && goddessResponse} </h1>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Prayers;


// var options = {
//     method: 'POST',
//     url: 'https://magic-8-ball.p.rapidapi.com/8-ball',
//     headers: {
//       'content-type': 'application/json',
//       'x-rapidapi-key': '3c33d9276emsh08b1d1a076682d7p137adajsn7feb2e848702',
//       'x-rapidapi-host': 'magic-8-ball.p.rapidapi.com'
//     },
//     data: {question: 'Will betty white live forever?'}
//   };
