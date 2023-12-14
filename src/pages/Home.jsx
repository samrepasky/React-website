
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes,
  Route, useNavigate} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import pic1 from './images/me1.jpg'
import pic2 from './images/flowers.jpg'
import pic4 from './images/Youtube_logo.png'
import pic5 from './images/hurr.jpeg'
import pic6 from './images/galexy.png'
import * as GiIcons from "react-icons/gi";
import './Home.css';
import * as AiIcons from "react-icons/ai";
import { IoSparkles } from "react-icons/io5";
import Hero from './components1/heroBackground'
import 'intersection-observer'
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import PopupPhone from "./popup-phone";


function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const navigate = useNavigate();
  const NavigateProject1 = () => {
    navigate('/project1');
  }
 
  const NavigateProject2 = () => {
      navigate('/project2').scrollTo(0, 0);
      
  };
  const NavigateProject3 = () => {
      navigate('/project3');
  };

  const NavigateContact = () => {
    navigate('/Contact');
};
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  
const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <>
    <div className="top ">
    <ScrollAnimation
    offset={500}
    animateIn="animate__pulse"
    initiallyVisible={true}
    animateOut='animate__zoomOut'
    >
      <h1>Hello <GiIcons.GiHand /> I am </h1>
    </ScrollAnimation>
    <ScrollAnimation
    animateIn="animate__pulse"
    initiallyVisible={true}
    animateOut='animate__zoomOut'
    >
    <h2 >Sam Repasky.</h2>
    <h3 className='wrapper'>Software Engineer   <IoSparkles />   Data Scientist</h3>
    </ScrollAnimation>
      
      <AutoplaySlider className='slider'
      play={true}
      interval={2000}
      organicArrows = {false}
      bullets = {false}
      >
        <img data-src={pic1} />
        <img data-src={pic2} />
      </AutoplaySlider>
      <div className='bg-top'>
      
      </div>
      </div>

  <div className="container2">
 <ScrollAnimation
 animateIn="animate__pulse"
 animateOut='animate__bounceOut'
 offset={0}
 >
<h2>Skills</h2>
 </ScrollAnimation>
 
  <ScrollAnimation 
  animateIn="animate__fadeInUp"
  duration={1}
  animateOut='animate__bounceOut'
  
  >
  <div className='grid1'>
    
    <div className='grid1-items'>
    <h3 className='wrapper'>PYTHON</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>JAVA</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>REACT</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>FLASK</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>HTML</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>JAVASCRIPT</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>CSS</h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'> C# </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>MATPLOTLIB </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>SCIKIT-LEARN </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>PYTORCH </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>PANDAS </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>NUMPY </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>NLTK </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>FIGMA </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>AGILE </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>SQLITE </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>GDC </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>GIT </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>DQR </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>THREE FIBER </h3>
    </div>
    <div className='grid1-items'>
    <h3 className='wrapper'>TYPESCRIPT </h3>
    </div>
    <div className='grid1-items'>
      <h3 className='wrapper'>ARDUINO</h3>
    </div>
    <div className='grid1-items'>
      <h3 className='wrapper'>SOLDERING</h3>
    </div>
    </div>
</ScrollAnimation>
    
  
  </div>

  <div className="container3">
  <ScrollAnimation
  animateIn='animate__bounceIn'
  >
    <h2 className= "h1-1" >Projects</h2>
    </ScrollAnimation>
    <div className='grid'>
      <div className="grid-items">
        <h3>Youtube Webapp:</h3> <br></br><p> Software Engineering <br></br>Project</p>
        <br></br>
        <img src={pic4} className='grid-items-pic' onClick={NavigateProject1}/>
      </div>
      <div className="grid-items">
        <h3>Storm Preparedness:</h3><br></br><p>Data Science<br></br> Project</p>
        <br></br>
        <img src={pic5} className='grid-items-pic' onClick={NavigateProject2}/>
      
      </div>
      <div className="grid-items">
        <h3>Galexy Classifier:</h3><br></br><p>Deep Learning<br></br> Project </p>
        <br></br>
        <img src={pic6} className='grid-items-pic' onClick={NavigateProject3}/>
      </div>
    </div>

    <PopupPhone trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>678-788-0861</h3>

      </PopupPhone>

    <div className='icon'>
    < AiIcons.AiFillGithub className='icon1' onClick={()=>{window.open('https://github.com/samrepasky');}}/>
   < AiIcons.AiFillLinkedin className='icon1' onClick={()=>{window.open('https://www.linkedin.com/in/samrepasky/');}}/>
   < AiIcons.AiFillPhone className='icon1' onClick={() => setButtonPopup(true)}/>
   <AiIcons.AiOutlineMail className='icon1' onClick={NavigateContact}/>
   </div>
  </div>
  
    </>
  );
}

export default Home;