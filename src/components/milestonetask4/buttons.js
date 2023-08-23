import React from 'react';
import './buttons.css'
export function Buttons(){
   
    return(
        <>

        <div className="bg2">
            <div className="text-center fulldiv">
                <h1 className="pt-5 text-white texth1">Social Buttons</h1>
            </div>
            <div className="text-center d-flex justify-content-around">
            <button type="button" class="btn text-white btn-warning btn-lg">Like</button>
            <button type="button" class="btn text-dark btn-light  btn-lg">Comment</button>
            <button type="button" class="btn text-white btn-primary btn-lg">Share</button>
            </div>
        </div>
        
        
        </>
    );

}