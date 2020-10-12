import React from 'react';
import '../styles/App.css';
import mail from '../pictures/mail.png'
import phone from '../pictures/phone.png'

const Home = () => {
  return (
 <div  >   
    <div className = "contact">
        <div className = "container-fluid"> 
          <div> 
            <h4>Contact Me</h4>
            <h7>Let's Talk!</h7>
            <div class = "container-flex">
            <table className="table-borderless">
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td><img src = {mail}></img></td>
                    <td>SamanthaThompson521@gmail.com</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td><img src = {phone}></img></td>
                    <td>1-219-617-6266</td>
                    </tr>
                </tbody>
            </table>

            <a name = 'contact'></a>
                
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;