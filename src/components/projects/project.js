import React from "react";
import './project.css'
import { Link } from "react-router-dom";
export function Projects(){
    return(
        <>
        <div className="bgpr p-5">
            <h1 className="text-center fonstyl">Projects and Skills</h1>
            <div>
            <div class="container pt-5">
                <h1 class="display-4 mt-5 ">Projects</h1>
                <p class="lead mt-3">My Projects using with Technical Skills</p>
                <p class="lead">Simple rules guide innovative, intelligent responses. Comprehensive rules guide rote, routine responses.</p>
            </div>
            </div>
            <div className="ml-5 mt-5 container row">
                <div className="col-lg-6">
            <ul class="list-group">
            <li  class="lead">
              HTML
                <span class="badge badge-primary marv  badge-pill">90%</span>
            </li>
            </ul>
            <ul class="list-group">
            <li  class="lead">
               CSS
                <span class="badge badge-primary mars  badge-pill">80%</span>
            </li>
            </ul>
            <ul class="list-group">
            <li  class="lead">
               BootStrap
                <span class="badge badge-primary marb  badge-pill">80%</span>
            </li>
            </ul>
            <ul class="list-group">
            <li  class="lead">
                JavaScript
                <span class="badge badge-primary  marb badge-pill">60%</span>
            </li>
            </ul>
            <ul class="list-group">
            <li  class="lead text-white">
                ReactJs
                <span class="badge badge-primary ml-5  badge-pill">70%</span>
            </li>
            </ul>
            <ul class="list-group">
            <li  class="lead text-white">
                NodeJs
                <span class="badge badge-primary ml-5 badge-pill">50%</span>
            </li>
            </ul>
            <ul class="list-group">
            <li  class="lead text-white">
               MySQL
                <span class="badge badge-primary ml-5 badge-pill">60%</span>
            </li>
            </ul>
            </div>
            <div className="col-lg-6 d-flex flex-row  justify-content-around">
            <Link to='/projectone'><button type="button" class="btn btn-outline-info text-white ">project 1</button></Link>
            <Link  to='/projecttwo'><button type="button" class="btn btn-outline-info text-white ml-5">project 2</button></Link>
            <Link  to='/projectthree'><button type="button" class="btn btn-outline-info  text-white ml-5">project 3</button></Link>
            <Link  to='/projectfour'><button type="button" class="btn btn-outline-info  text-white ml-5">project 4</button></Link>
            <Link  to='/projectfive'><button type="button" class="btn btn-outline-info text-white ml-5">project 5</button></Link>
          
            </div>
            </div>
        </div>
        </>
    );
}