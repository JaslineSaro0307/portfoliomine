import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './front.css'
import Typewriter from 'typewriter-effect';
export function Front(){
 
    return(
        <>
          <div className="text-center bg">
             <h1   data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className=" fonsty textsp pt-5">JASLINE SARO</h1>
            <div className="p-5">
              <h3  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="2000" className="textsp fontnormal">MERN STACK DEVELOPER</h3>
              <br/>
              <h4 className="fontnormal textsp"><Typewriter
              options={{
              strings: ['Making My Websites Better for My Clients','I am sure you know how it feels, too.','A website without visitors is like a ship lost in the horizon.'],
              autoStart: true,
              loop: true,
            }}
          /></h4>
            
            </div>
            <Link to='/ab'><button type="button" className="btn btn-outline-info textsp btnbox m-5">About Me</button></Link>
          </div>
          
        </>
    );
}