import React, { useEffect, useState } from 'react';
import axios from "axios";



const Prayers = () => {

    const [wish,setWish] = useState("")
    const [goddessResponse,setGoddessResonse] = useState("")
    
    
   const handleWishes = ()=>{
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
       .then((res=> setGoddessResonse(res.data.body.answer)))
       .catch((err)=>console.log(err))
   }
    

    return(
    <div className="prayersContainer">
        <h1 className="libraryHeader">Pray to Athena</h1>
        <dsiv className='prayersWrapper'>
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
                    <input className="InputDetails input" id="wish" type="text" onChange={(e)=>setWish(e.target.value)}/>
                    <button className="CuteButton" onClick={()=>handleWishes()}> Pray to Athena!</button>
                </div>
                <div className="AthenaResponse">
                    {/* <h1> {wish ? wish : "" } </h1> */}
                    <h2 className="response"> Athena's response: </h2>
                    <h1 className="response2">{goddessResponse && goddessResponse} </h1>
                </div>
            </div>
        </dsiv>
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