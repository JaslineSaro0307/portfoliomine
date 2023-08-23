import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
export function Nav(){

    return(
        <>

        {/* <..............NavBar Section..............>  */}

            <nav class="navbar navbar-expand-lg navbar-light bgnav">
                <a class="navbar-brand" href="#" className="textw">Jasline<span className="textsp">Xavier</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/ab'>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/qualification'>Qualification</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/certificates'>Certificates</Link>
                        
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/projects'>Projects</Link>
                   </li>
                    <li class="nav-item">
                        <Link class="nav-link text-white" to='/contact'>Contact</Link>
                    </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}