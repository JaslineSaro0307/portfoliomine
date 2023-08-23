import React from "react";
import Profile from "./profilepic.jpg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";           
import './about.css'

export function About(){
    return(
        <>
            <h1 className="mt-5 text-center fontnormal textsp">About Me</h1>
          <div className="container row p-5">
            <div className="col-lg-6 ">
              <img src={Profile} className="col-lg-10 img"/>
            </div>
            <div className="col-lg-6 ">
              <h4 className="text-center pt-5 fontnormal textsp">MERN STACK DEVELOPER</h4>
              <p className="text-center pt-5 fontnormal textsp">Good Coder with an Organised, Efficient and hard working<br/>Person have been deeply interested in being part of such projects. Moreover expertise and previous experience of already handling agile based projects.</p>
            <div className="d-flex flex-row justify-content-around">
              <Link to="https://www.linkedin.com/in/jasline-saro-251310260" target="blank"><FontAwesomeIcon icon={faLinkedin} className="fonticon"/></Link>
              <Link to="https://github.com/JaslineSaro0307" target="blank"><FontAwesomeIcon icon={faGithub} className="fonticon"/></Link>
              <Link to="mailto:jaslinex1208@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelope} className="fonticon"/></Link>
            </div>
            <div className="pt-5 d-flex flex-row  justify-content-around">
              <Link to="https://drive.google.com/file/d/1xyZa811p4a4lxMkkdpcZgvVEVfT_rf7a/view?usp=sharing"><button type="button" class="btn bgbtn text-white">Resume</button></Link>
            </div>
              
            </div>
          </div>
        </>
    );
}