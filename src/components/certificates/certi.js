import React from "react";
import imc1 from './cert1.jpg'
import imc2 from './cert2.jpg'
import imc3 from './cert3.jpg'
import './certi.css'

export function Certificates(){
    return(       
        <>

            <div class="container text-center fontm p-5">
                <h1 >CERTIFICATES</h1>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col-lg-4">
                    <div class="card">
                        <img src={imc1} className="one" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="card">
                        <img src={imc2} className="two" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                    <img src={imc3} className="one" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"/>
                    </div>
                </div>
                </div>

            </div>
                
         

        </>
);
}