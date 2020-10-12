import React from 'react';
import '../styles/Loader.css';

const Loader = ({Loading}) => {

    return (
    <div className = {Loading ? 'loader' : 'loader finish'}>
        <div className = 'logo'>
          <img src = ".//logo512.png"></img>
        </div>

    </div>);
  };
  
  export default Loader;