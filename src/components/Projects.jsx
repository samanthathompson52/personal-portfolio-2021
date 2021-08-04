import React from 'react';
import '../styles/Projects.css';
import discord from '../pictures/discord-twitch-bot.png';

import Container from 'react-bootstrap/Container'

const Projects = () => {
  return (

    <div className = 'section'>
      <Container fluid className="text-left">
      <h4>Projects</h4>
       <div className = "row">
      <div className="col-sm-8"> 
        <h6 className = 'w-100 dotted-line'>Twitch Community Discord Bot<span className="dot"></span></h6>
         <h5>Created a custom discord bot that serves as a management and entertainment tool for over 300 people in a Twitch community. Features include automatic role assigment, queue system, custom welcome messages, and role assigment based upon user reactions.  </h5>
         <div className = 'tech-list'>
         <ul className="list-inline ul">
           <li className="list-inline-item li">Python</li>
           <li className="list-inline-item li">Discord API</li>
           </ul>
           </div>
      </div>
      <div className="col-sm-4"> 
        <div className = "project-files">
           <a href="https://github.com/samanthathompson52/discord-bot" target="_blank" rel="noopener noreferrer"><img src={discord} width = "80%" alt="Link to Twitch Discord Bot project file" /></a>
        </div>  

      </div>
      </div>
     </Container>
    </div>

  );
}

export default Projects;
