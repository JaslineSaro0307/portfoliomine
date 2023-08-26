import React from "react";
import './qualification.css'
export function Qualification(){
    return(
        <>
          <div className="bgqu p-5">
            <h1 className="text-center fontnormal fonticon mt-5">Qualification</h1>
          <div className="container  mx-auto row ">
            <div className="containert mt-5 col-lg-4">
                  <div className="card-deck">
                    <div className="card ">
                      <div className="card-body text-center">
                        <h4 className="card-title fontnormal mt-3">SSLC</h4>
                        <h5 className="card-text mt-5 fontnormal">Government Girls Higher Secondary School</h5>
                        <div className="overlay fontbg">
                        <div className="text fontnormal">Government Girls Higher Secondary School Ashok Nagar - 91%</div>
                        </div>
                      </div>
                      </div>
                    </div>
            </div>
            <div className="containert mt-5 col-lg-4">
            <div className="card-deck">
                      <div className="card ">
                      <div className="card-body text-center">
                        <h4 className="card-title mt-3 fontnormal">HSC</h4>
                        <h5 className="card-text mt-5 fontnormal">Government Girls Higher Secondary School</h5>
                        <div className="overlay">
                        <div className="text fontnormal">Government Girls Higher Secondary School Ashok Nagar - 60%</div>
                        </div>
                      </div>
                      </div>
            </div>
            </div>
            <div className="containert mt-5 col-lg-4">
            <div className="card-deck">
                      <div className="card">
                      <div className="card-body text-center">
                        <h4 className="card-title mt-3 fontnormal">UG Degree</h4>
                        <h5 className="card-text mt-5 fontnormal">Shri Shankarlal Sundarbai Shasun Jain College</h5>
                        <div className="overlay">
                        <div className="text fontnormal">Bachelor of Science in Mathematics - 79%</div>
                        </div>
                      </div>
                      </div>
            </div>
            </div>
          </div>
          </div>

          
          

        </>
    );
}