import React from 'react';
import email from '../pictures/gmail.svg'
import linkedin from '../pictures/linkedin.svg'
import github from '../pictures/github.svg'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Footer = () => {
    return(
        <div className="App-footer">
            <Container className = "d-lg-none">
                <h10>CONTACT ME</h10>
            <Row className = "justify-content-center" >
                <a href="mailto:samanthaThompson521@gmail.com" className = "links" target="_blank" rel="noopener noreferrer"><img src={email} width="30em" height="30em" alt="Email social media icon" /></a>
         
                <a href="https://www.linkedin.com/in/sammie-thompson/" className = "links" target="_blank" rel="noopener noreferrer"><img src={linkedin} width="30em" height="30em" alt="LinkedIn social media icon" /></a>
                           
                <a href="https://github.com/samanthathompson52" className = "links" target="_blank" rel="noopener noreferrer"><img src={github} width="30em" height="30em" alt="Github social media icon" /></a>
           </Row> 
           </Container>
        <h7>Designed and Created by Samantha Thompson</h7>
       
        </div>
    );
  }
  
  export default Footer;
