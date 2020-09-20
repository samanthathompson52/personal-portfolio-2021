import React from 'react';
import '../App.css';

const AboutMe = () => {
  return (
 <div>
    <div className = "About-Me">
    <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3">   
                <div className = "py-4">   
                <br></br>         
                  <img src = "./profile.png" border = "8px solid black"></img></div></div> 
                <div class="col-sm-9">
                <div className = "p-4">   
                  <h4>About Me</h4>
                  <h5> Neurobiology & Physiology graduate searching for an opportunity to grow and discover new technology. </h5>
                  <h5> Throughout my undergraduate education I found myself gaining new experiences in clinical, research, and academia areas of biology. During this, I realized how much of an impact technology can have on healthcare and research.</h5>
                  <h5> It has become my passion to combine my knowledge of biology and computer science to create advancements to healthcare and science. Even after graduation, I am actively improving my own knowledge of programming.</h5>
                <div className = "py-4"> 
                <button type="button" href = "#" class="btn btn-primary raised btn-block">Resume</button>
              </div></div>
             
        
    </div>
</div>
</div>
</div>
</div>
  );
}

export default AboutMe;