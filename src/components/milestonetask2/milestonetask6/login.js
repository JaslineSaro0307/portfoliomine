import React from 'react';
import comp from './cmp.png'
import './login.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
export function Lpage(){

    return(
        <>
         <div className='bglog'>
            <h1 className='text-center'>Member Login</h1>
            <div className='container bg-white rad'>
                <div className='row p-5'>

                    <div className='col-lg-6'>
                        <img src={comp} className='col-lg-8'/>
                    </div>
                    <div className='col-lg-6'>
                        <form>
                            <div className='form-outline icon mb-4 d-flex'>
                                <FontAwesomeIcon icon={faEnvelope} className='mt-3' />
                                <input type='text' placeholder='Email' className='rounded form-control form-control-lg'/>
                            </div>
                            <div className='form-outline icon d-flex mb-4'>
                            <FontAwesomeIcon icon={faLock} className='mt-3' />
                                <input type='password' placeholder='Password' className='rounded  form-control form-control-lg'/>
                            </div>
                            <button className='btn btn-success btn-lg'>Login</button>
                            <br/>
                            <br/>
                            <a href="#!" class="text-body">Forgot <span className='text-success'>Username / Passsword ?</span></a>
                            <br/>
                            <br/>
                            <p className='text-success'>Create your Account</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
