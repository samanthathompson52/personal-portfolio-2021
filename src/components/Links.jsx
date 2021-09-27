import React from 'react';
import '../styles/Links.css';
import email from '../pictures/gmail.svg';
import linkedin from '../pictures/linkedin.svg';
import github from '../pictures/github.svg';
import Navbar from 'react-bootstrap/Navbar'

const Links = () => {
    return(
        <Navbar fixed="bottom" className="navbar-bot d-none d-lg-flex">
            <div className ="ml-auto text-left">
                <div className = "contact">
                    CONTACT ME
                </div>
                <div className="icon py-2">
                    <a href="mailto:samanthaThompson521@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} width="40em" height="40em" alt="Email social media icon" /></a>
                </div>
                <div className="icon py-2">
                    <a href="https://www.linkedin.com/in/sammie-thompson/" target="_blank" rel="noopener noreferrer"><img src={linkedin} width="40em" height="40em" alt="Email social media icon" /></a>
                </div>
                <div className="icon py-2">
                    <a href="https://github.com/samanthathompson52" target="_blank" rel="noopener noreferrer"><img src={github} width="40em" height="40em" alt="Email social media icon" /></a>
                </div>
            </div>
        </Navbar>   
    );
  }
  
  export default Links;
