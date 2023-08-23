import React, { useState } from "react";
import './mangobanana.css'
import mang from './mango.jpg'
import bana from './monkey.png'
export function Mangobanana() {
    
    const [Mango,setMango]=useState(0)
    const [Banana,setBanana]=useState(0)
    return(

        <>
        
        <div className="bgmango p-5">
            <div className="bg-white rad container p-5">
                <h1 className="text-center">Bob ate {Mango} Mangoes {Banana}  Bananas</h1>
                <div className="p-5">
                    <img src={mang} className="col-lg-6"/>
                    <img src={bana}  className="col-lg-6"/>
                </div>
                <div className="d-flex justify-content-around">
            <button type="button" class="btn btn-warning" onClick={()=>{setMango (Mango+1)}}>Eat Mango</button>
            <button type="button" class="btn btn-success"  onClick={()=>{setBanana (Banana+4)}}>Eat Banana</button>
            </div>
            </div>
        </div>

        </>
    );
}