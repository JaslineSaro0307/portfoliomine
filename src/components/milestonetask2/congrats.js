import React from 'react';
import './congrats.css'
import pro from './profile.png'
import wat from './watch.png'
export function Congrats(){
    return(
     <>
     <div className="bgcard">
     <h1 className="text-center">Congratulations</h1>
     <div className="text-center pt-5 bgcol col-lg-4 mx-auto">
        <img src={pro}/>
        <h4>Kiran V</h4>
        <p>vishnu institute of Computer Education and Technology.Bhimavaram</p>
        <img src={wat}/>
     </div>

     </div>
     </>
    );
}