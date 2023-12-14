import * as AiIcons from "react-icons/ai";
import React, { Component, useState } from 'react';
import pic1 from './images/react.png' 
import './about.css';
/*https://projects.verou.me/css3patterns/#upholstery*/
import { BrowserRouter as Router, Routes,
Route, useNavigate} from 'react-router-dom';
import PopupPhone from "./popup-phone";

  export const About = () => {
  const navigate = useNavigate();
  const NavigateContact = () => {
    navigate('/Contact');
   

  }
  const [buttonPopup1, setButtonPopup1] = useState(false)
  return (
    <>
  <div className="about">
     <div className="bg">
      <div className="grid-container">
        <div className="item1">
          <h1>About this Website</h1>
        </div>

        <div className="item3">
          <p>Greetings earthlings!!!! And welcome to my digital portfolio. I’ve spent countless hours googling and crafting this website over the past couple months to have the privilege of displaying my college work on the web! I am proud to say I was able to pick up and practice react and all of the goodies it has to offer. I’ve hooked to my hearts content, I’ve component-ed to the moon and back, and I’ve been changed by the react-icon library. 

          </p>
          <br>
          </br>
          <p>It all started with this youtube video on how to build a 
          <a href= 'https://youtu.be/CXa0f4-dWi4?si=vgarR5G08QPjRy7-'> NavBar </a>. which was my first hands on experience with react. I look forward to continuously updating this website as my skills as a web programmer develop. Thank you for stopping by! Have a lovely day. 
          </p>
       </div>
    
        <div className="item2">
          <div className="react-logo">
            <div className="nucleo">
            <img src={pic1}/>
            </div>
            </div>
        </div>
        <PopupPhone trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <h3>678-788-0861</h3>

      </PopupPhone>

        <div className="item4">
          < AiIcons.AiFillGithub className="icon1" onClick={()=>{window.open('https://github.com/samrepasky');}}/>
          < AiIcons.AiFillLinkedin className="icon1"onClick={()=>{window.open('https://www.linkedin.com/in/samrepasky/');}}/>
          < AiIcons.AiFillPhone className="icon1" onClick={() => setButtonPopup1(true)}/>
          <AiIcons.AiOutlineMail className="icon1" onClick={NavigateContact} />
        </div>
    
      </div>
      </div>
       </div>
    </>
  )
}

export default About;