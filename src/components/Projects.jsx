import React from 'react';
import '../App.css';

const Projects = () => {
  return (

    <div className = 'projects'>
      <div class="container-fluid">
      <h4>Projects</h4>
       <div className = "row">
      <div class="col-sm-8"> 
        <h6>Discord Bot . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</h6>
         <h5>Created a custom discord bot using Python that serves as a functional management and entertainment tool for over 200 people.</h5>
      </div>
      <div class="col-sm-4"> 
        {/* <img src = "./dotted-line.png" class="img-fluid" alt="Responsive image" width = "700"></img> */}
      </div>
      </div>
     </div>
     
    </div>

  );
}

export default Projects;