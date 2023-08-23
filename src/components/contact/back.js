import React from "react";
import { Link } from "react-router-dom";
import hear from './heart.png'
import './emoji.css'
export function Heart(){
    return(
        <>
        <div className=" p-5">
          <div className="text-center mx-5 mt-5 container bg-white rad pad row">
           <img src={hear} className="ihm mx-auto"/>
           <br/>
          <h5 className="p-5">We will Receive your feedback Thank You for supporting Me</h5>
         </div>
        </div>
        </>
    );
}
