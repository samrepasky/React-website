import React, { Component } from 'react';
import * as IoIcons from "react-icons/io";
import './project2.css'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import pic1 from './images/unnamed.png'
import p1 from './images/continual-open1.png'
import p2 from './images/continual-quiz1.png'
import p3 from './images/continual-home1.png'
import p4 from './images/continual-search1.png'

import p5 from './images/continual-onboarding2.png'
import p6 from './images/continual-info2.png'
import p7 from './images/continual-info3.png'
import p8 from './images/continual-walkthrough2.png'
import p9 from './images/continual-home2.png'
import p10 from './images/continual-quiz2.png'
import p11 from './images/continual-shopping2.png'
import p12 from './images/continual-shopping3.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import p13 from './images/continualpre.jpg'


function Project4() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  return (
    <div className= 'Project1'>
    < IoIcons.IoIosArrowBack className='icon-back'onClick={BackToProject}/>
    <h1>Continual: Mobile app Design</h1>
    <button className='button1' onClick={()=>{window.open('https://www.figma.com/proto/bvueHWFzND6f3wNjylz54D/HCI-Project-(Copy)?type=design&node-id=1518-226&t=jsd8FXfwfwfgZjQB-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=211%3A170&mode=design');}}>Click here to view Figma Prototype </button>
    <div className='icon-top-4'>
 
 <AiIcons.AiOutlineFormatPainter />
 <FaIcons.FaFigma />
 <AiIcons.AiOutlineUsergroupAdd />
</div>


<div className='section'>
      <h2>Initial Concept <GiIcons.GiClothes /></h2>
      <p>Our mission is to deliver both sustainability and fashion. ‘Continual’ welcomes users into a personalized experience where they are free to explore sustainable fashion and learn more about how to be a more environmentally conscious shopper. Through the curated feed, or through the style matching feature, the user can browse endless quantities of clothes guiltfree. Once you find something you like we provide further information about the item and what makes it environmentally friendly. Then, we link the site where you can purchase the item. If the user finds something they like and would like to save for later then we have a favorites page the user could add it to.  We are here to provide a one stop catalog to the sustainable fashion world. We will help you find the perfect pieces to create the closet of your dreams.</p>
      <br></br>
      <br />
      <br />
      <p>Presenting Project at Georgia State Poster day spring 2023:</p>
      <img src={p13} />
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2> Timeline<AiIcons.AiOutlineFieldTime/></h2>
      <p>This Project was due in four stages:</p>

      <p>-Navigation Flow</p>
      <p>-First prototype</p>
      <p>-usability Testing </p>
      <p>-Final Prototype</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Audiance and <br></br>Problem Space <FaIcons.FaTheaterMasks /></h2>

      <p>Our target audience consists of anyone interested in engaging in sustainable fashion. The prevailing issue stems from a lack of understanding among potential buyers regarding the importance of sustainable fashion. This knowledge gap has resulted in insufficient demand for eco-conscious products, discouraging companies and brands from investing in sustainable practices. The consequence of this trend is a substantial environmental impact, as fast fashion continues to generate excessive waste, emissions, and occupies significant space in landfills. Bridging this awareness gap and fostering a greater understanding of the ecological implications is crucial for fostering a more sustainable and responsible approach within the fashion industry.</p>
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Navigational Flow <AiIcons.AiFillRobot/></h2>

      <img src={pic1} />
    
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>first prototype  <GiIcons.GiRobotAntennas /></h2>
        
      <AwesomeSlider className='slider1'>
        <img data-src={p1} />
        <img data-src={p2} />
        <img data-src={p3} />
        <img data-src={p4} />
      </AwesomeSlider>
      
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Usability testing  <FaIcons.FaPaperclip /></h2>

      <p>Our usability testing involved seven participants, data was collected in  Google Forms. The participants engaged in guided tasks, such as utilizing a Style Matching feature. One specific task required them to envision recreating a celebrity outfit they had seen on the streets of New York, employing the style matching function to discover sustainable clothing items for a Gigi Hadid-inspired look. The participants were prompted to answer questions assessing the ease of use and design of the application, as well as whether they required assistance and if they successfully completed the task within a designated timeframe. Additionally, feedback on the least and most enjoyed features, overall satisfaction, and the ability to explain the app to a friend was gathered, providing valuable insights into the user experience.</p>
      <br></br>
      <p>Findings:</p>
    <p>First off, the home screen needed improvements, particularly regarding the size of buttons, which were deemed too small for easy readability. Participants emphasized the importance of creating a clearer distinction between each section and improving overall spacing. To address these concerns, the proposed fixes included enlarging sections by incorporating more images and integrating better design elements. Furthermore, participants expressed a need for more clarification regarding the Eco Score and Green Score, including an understanding of what they are and how to earn them. In response, the Green Score was renamed to Green Rating, and additional explanations for both the Eco Score and Green Rating were introduced during the onboarding process. To enhance user comprehension, a mini tutorial on the home screen was also implemented as part of the corrective measures.</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Final Prototype <GiIcons.GiPaperWindmill /></h2>

      <AwesomeSlider className='slider1'>
      <img data-src={p5} />
        <img data-src={p6} />
        <img data-src={p7} />
        <img data-src={p10} />
        <img data-src={p8} />
        <img data-src={p9} />
        <img data-src={p11} />
        <img data-src={p12} />
      
        </AwesomeSlider>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Contributors <IoIcons.IoMdPeople /></h2>
      <p>-Obehi Ehimen</p>
      <p>-D'Anne Anthony</p>
      <p>-Janis Grikstas</p>
      <p>-Sam Repasky</p>
      <p>-Hadia Faiz</p>
    </div>
    <p>__________________________________________________</p>
    </div>
  )
}

export default Project4;