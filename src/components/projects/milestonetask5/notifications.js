import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
export function Notification(){

    return(
        <>
        <div className="text-center ">
            <h1>Notifications</h1>
            <div className="bg-primary rounded text-white  text-center px-2 py-4 ml-auto mr-auto col-lg-3">
               <h4><FontAwesomeIcon icon={faCircleCheck}/> Information Message</h4>
            </div>
            <div  className="bg-success rounded text-white text-center ml-auto mr-auto py-4 mt-2 col-lg-3">
                <h4><FontAwesomeIcon icon={faCircleCheck}/> Success Message</h4>
            </div>
            <div  className="bg-warning rounded text-white text-center py-4 ml-auto mr-auto mt-2 col-lg-3">
                <h4><FontAwesomeIcon icon={faBell} /> Warning Message</h4>
            </div>
            <div  className="bg-danger rounded text-white text-center py-4 ml-auto mr-auto mt-2 col-lg-3">
                <h4><FontAwesomeIcon icon={faCircleExclamation} /> Error Message</h4>
            </div>
        </div>
       </>
    );
}