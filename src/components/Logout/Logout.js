import React from 'react';
import './Logout.css';
import logoutPic from '../../assets/logoutPic.png';
//comment

const Logout = (props) => {
    return(
        <img id="logout" 
                className="logout" 
                src={logoutPic} 
                alt="power button" 
                onClick={props.clearSession}/>
    )
}

export default Logout;