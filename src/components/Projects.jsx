import React from 'react';
import '../styles/Projects.css';

import Container from 'react-bootstrap/Container'

const Projects = () => {
  return (

    <div className = 'section'>
      <Container fluid className="text-left">
      <h4>Projects</h4>
       <div className = "row">
      <div className="col-sm-8"> 
        <h6 className = 'w-100 dotted-line'>Twitch Community Discord Bot<span className="dot"></span></h6>
         <h5>Created a custom discord bot using Python that serves as a functional management and entertainment tool for over 200 people.</h5>
      </div>
      <div className="col-sm-4"> 
      
        {/* <img src = "./dotted-line.png" className="img-fluid" alt="Responsive image" width = "700"></img> */}
      </div>
      </div>
     </Container>
     <span id='experience'></span>
    </div>

  );
}

export default Projects;
