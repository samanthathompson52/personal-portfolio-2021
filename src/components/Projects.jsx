import React from 'react';
import '../styles/Projects.css';
import discord from '../pictures/discord-twitch-bot.png';
import pediatrics from '../pictures/pediatrics.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const Projects = () => {
  return (

    <div className = 'section'>
      <Container fluid className="text-left">
      <h4>Projects</h4>
      <div>
        <Row>
          <Col xs={12} lg={8}> 
            <h6 className = 'w-100 dotted-line'>Twitch Community Discord Bot<span className="dot"></span></h6>
            <h5>Created a custom discord bot that serves as a management and entertainment tool for over 300 people in a Twitch community. Features include automatic role assigment, queue system, custom welcome messages, and role assigment based upon user reactions.  </h5>
            <div className = 'tech-list'>
              <ul className="list-inline ul">
              <li className="list-inline-item li">Python</li>
              <li className="list-inline-item li">Discord API</li>
              </ul>
          </div>
        </Col>
        <Col xs={0} lg={4} className = "d-none d-lg-block"> 
          <div className = "project-files">
            <a href="https://github.com/samanthathompson52/discord-bot" target="_blank" rel="noopener noreferrer"><img src={discord} width = "60%" alt="Link to Github for Twitch Community Discord Bot" /></a>
          </div>  
        </Col>
      </Row>

      <div>
        <Row>
          <Col xs={12} lg={8}> 
            <h6 className = 'w-100 dotted-line'>Pediatrics Office Website<span className="dot"></span></h6>
            <h5>Designed and built an original website for a local pediatric practice.  The website features information on both of their locations, services, staff and medical education documents.  </h5>
            <div className = 'tech-list'>
              <ul className="list-inline ul">
              <li className="list-inline-item li">HTML</li>
              <li className="list-inline-item li">CSS</li>
              <li className="list-inline-item li">React</li>
              <li className="list-inline-item li">Javascript</li>
              </ul>
          </div>
        </Col>
        <Col xs={0} lg={4} className = "d-none d-lg-block"> 
          <div className = "project-files">
            <a href="https://github.com/samanthathompson52/lincoln" target="_blank" rel="noopener noreferrer"><img src={pediatrics} width = "60%" alt="Link to Github for Pediatrics Website" /></a>
          </div>  
          </Col>  
        </Row>
        </div>  
        </div>  
     </Container>
    </div>
  );
}

export default Projects;
