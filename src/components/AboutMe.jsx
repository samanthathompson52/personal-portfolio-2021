import React from 'react';
import '../styles/App.css';
import profile from '../pictures/profile.png';

const AboutMe = () => {
  return (
        
 <div>
    <div  className = "About-Me">
      <div className="container-fluid">
        <div className="row">    
          <div className="col-sm-3"> 
            <div className = "py-4">   
            <br></br>        
              <img src = {profile} border = "8px solid black" alt="Picture of me"></img></div></div> 
              <div className="col-sm-9">
                <div className = "p-4">  
                  <h4>About Me</h4>
                  <h5> Neurobiology & Physiology graduate searching for an opportunity to grow and discover new technology. </h5>
                  <h5> Throughout my undergraduate education I found myself gaining new experiences in clinical, research, and academia areas of biology. During this, I realized how much of an impact technology can have on healthcare and research.</h5>
                  <h5> It has become my passion to combine my knowledge of biology and computer science to create advancements to healthcare and science. Even after graduation, I am actively improving my own knowledge of programming.</h5>
                  <div className = "py-4"> 
                    <a href = "/Resume.pdf" target = "_blank"><button type="button" className="btn btn-primary raised btn-block">Resume</button></a>
                    <a name = 'project'></a>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
);
}

export default AboutMe;