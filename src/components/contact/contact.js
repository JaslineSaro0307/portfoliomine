import React from "react";
import { Link } from "react-router-dom"; 
import './contact.css'

export function Contact(){
    return(

        <>

    <section className="contact fonsty" id="contact">
        <div className="container">
            <div className="heading text-center ">
                <h2 className="fontnormal fonsty">Contact
                    <span className="fontnormal fonsty"> Me </span></h2>
                <p className="fontnormal">An "About Me" page is one of the most important parts of your portfolio, website, or blog. 
                    <br/>Most important is that you choose one and remain consistent, rather than alternating .</p>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="title">
                        <h3 className="fontnormal">Contact detail</h3>
                       
                    </div>
                    <div className="content">
                        {/* <!-- Info-1 --> */}
                        <div className="info">
                            <h4 className="d-inline-block">PHONE :
                                <br/>
                                <span>81488 34096</span></h4>
                        </div>
                        {/* <!-- Info-2 --> */}
                        <div className="info">
                          <h4 className="d-inline-block">EMAIL :
                                <br/>
                                <span>jaslinex1208@gmail.com</span></h4>
                        </div>
                        {/* <!-- Info-3 --> */}
                        <div className="info">
                          <h4 className="d-inline-block">ADDRESS :<br/>
                                <span>Navarathna Colony K.K.Nagar West Ch-78</span></h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-7">

                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <input type="text" class="form-control" placeholder="Name"/>
                            </div>
                            <div className="col-sm-6">
                                <input type="email" class="form-control" placeholder="Email"/>
                            </div>
                            <div className="col-sm-12">
                                <input type="text" class="form-control" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                        </div>
                        <Link to='/f'><button type="button" class="btn btn-block">Send Now</button></Link>
                    </form>
                </div>
            </div>
        </div>
    </section>
           
        </>
    )
};