import React from 'react';
import '../styles/Footer.css';
import email from '../pictures/gmail.svg'
import linkedin from '../pictures/linkedin.svg'
import github from '../pictures/github.svg'

import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
    return(
        <Navbar fixed="bottom" className="navbar-bot d-none d-lg-flex">
            <div className ="ml-auto text-left">
                <div className="py-2">
                    <a href="mailto:samanthaThompson521@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} width="40em" height="40em" alt="Email social media icon" /></a>
                </div>
                <div className="py-2">
                    <a href="mailto:samanthaThompson521@gmail.com" target="_blank" rel="noopener noreferrer"><img src={linkedin} width="40em" height="40em" alt="Email social media icon" /></a>
                </div>
                <div className="py-2">
                    <a href="mailto:samanthaThompson521@gmail.com" target="_blank" rel="noopener noreferrer"><img src={github} width="40em" height="40em" alt="Email social media icon" /></a>
                </div>
            </div>
        </Navbar>   
    );
  }
  
  export default Footer;
