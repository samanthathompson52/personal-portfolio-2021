import React from 'react';
import '../styles/Projects.css';
import discord from '../pictures/discord_bot.png';

import Container from 'react-bootstrap/Container'

const Projects = () => {
  return (

    <div className = 'section'>
      <Container fluid className="text-left">
      <h4>Projects</h4>
       <div className = "row">
      <div className="col-sm-8"> 
        <h6 className = 'w-100 dotted-line'>Twitch Community Discord Bot<span className="dot"></span></h6>
         <h5>Created a custom discord bot using Python that serves as a functional management and entertainment tool for over 300 people. </h5>
      </div>
      <div className="col-sm-4"> 
      
       <img src = {discord} alt="Twitch Discord Bot" ></img>

      </div>
      </div>
     </Container>
     <span id='experience'></span>
    </div>

  );
}

export default Projects;
