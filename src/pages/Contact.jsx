import * as AiIcons from "react-icons/ai";
import React, { Component, useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import pic1 from './images/barbie.png'
import { FaSun } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from "./popup";
import PopupPhone from "./popup-phone";
import { BrowserRouter as Router, Routes,
  Route, useNavigate} from 'react-router-dom';






/*https://dashboard.emailjs.com/admin/templates/jkk1v5v/content*/

    export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7te2nge', 'template_by2pwv9', form.current, 'kfmkthbTWPW8Dm_is')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.getElementById("norm").reset();
    };

    const [buttonPopup, setButtonPopup] = useState(false)
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const navigate = useNavigate();
    const NavigateContact = () => {
      navigate('/Contact');
  };

  return (
    <>
    
    <div className= 'contact'>
      <body>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Email Sent</h3>

      </Popup>
      <h1>  <FaSun />Get in<br></br> Contact <br></br>with me</h1>
    
      
    <div className="form-box">
     
    <form ref={form} onSubmit={sendEmail} id='norm' >
    <fieldset>
      <label>Name:</label>
      <input type="text" name="from_name" />
      
      <label>Email:</label>
      <input type="email" name="reply_to" />
      
      <label>Message:</label>
      <textarea name="message" />
      <br></br>
      <input className="button2" type="submit" value="Send" onClick={() => setButtonPopup(true)} />
      </fieldset>
    </form>
    </div>
    <ScrollAnimation 
  animateIn="animate__fadeInUp"
  duration={1}
  animateOut='animate__bounceOut'
  
  >
    <h2><FaArrowDown /></h2>
    </ScrollAnimation>

    <PopupPhone trigger={buttonPopup1} setTrigger={setButtonPopup1}>
        <h3>678-788-0861</h3>

      </PopupPhone>
    <div className="icon">
     
    < AiIcons.AiFillGithub className='icon1' onClick={()=>{window.open('https://github.com/samrepasky');}}/>
   < AiIcons.AiFillLinkedin className='icon1'onClick={()=>{window.open('https://www.linkedin.com/in/samrepasky/');}}/>
   < AiIcons.AiFillPhone className='icon1'onClick={() => setButtonPopup1(true)}/>
   <AiIcons.AiOutlineMail className='icon1'onClick={NavigateContact}/>
   </div>
   </body>
   </div>
    </>

  )
}

export default Contact;

