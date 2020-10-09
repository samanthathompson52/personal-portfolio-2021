import React from 'react';
import '../App.css';
import mail from '../pictures/mail.png'
import phone from '../pictures/phone.png'

const Home = () => {
  return (
 <div  >   
    <div className = "contact">
        <div className = "container-fluid"> 
          <div> 
            <h4>Contact Me</h4>
            <h6>Let's Talk!</h6>
            <div class = "container-flex">
            <table class="table-borderless">
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