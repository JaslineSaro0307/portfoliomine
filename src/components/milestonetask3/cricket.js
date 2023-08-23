import React from 'react';
import './cricket.css'
import csk from './csk-img.png'
import rcb from './rcb-img.png'
export function Cricket(){
    return(
        <>
        <div className="bg1">
          <div className="text-center pt-5 ">
            <h1 className="text-white ">Super Over League</h1>
            <div className="pt-5 ">
                <img src={csk}/>
                <img src={rcb}/>
            </div>
          </div>
          </div>
        </>
    );
}