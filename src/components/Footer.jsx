import React from 'react';
import '../styles/App.css';

const Footer = () => {
    return(
    
         <nav className="navbar-bot fixed-bottom">
            <div class ="ml-auto">
            <table className="table-responsive">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Email</th>
                    </tr>
                    <tr>
                    <th scope="row">LinkedIn</th>
                    </tr>
                    <tr>
                    <th scope="row">Github</th>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    </tr>
                    <tr>
                    <th scope="row"> </th>
                    </tr>
                </tbody>
                </table>
                </div>
            </nav>         
    );
  }
  
  export default Footer;