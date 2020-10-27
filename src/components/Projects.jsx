import React from 'react';
import '../styles/App.css';
import '../styles/Projects.css';

const Projects = () => {
  return (

    <div className = 'projects'>
      <div className="container-fluid">
      <h4>Projects</h4>
       <div className = "row">
      <div className="col-sm-8"> 
        <h6 className = 'w-100 abc'>Twitch Community Discord Bot</h6>
         <h5>Created a custom discord bot using Python that serves as a functional management and entertainment tool for over 200 people.</h5>
      </div>
      <div className="col-sm-4"> 
      
        {/* <img src = "./dotted-line.png" className="img-fluid" alt="Responsive image" width = "700"></img> */}
      </div>
      </div>
     </div>
     
    </div>

  );
}

export default Projects;