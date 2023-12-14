import React, { Component } from 'react';
import './Projects.css'
import { BrowserRouter as Router, Routes,
  Route, useNavigate} from 'react-router-dom';
import Home  from './Home';
import { Link } from 'react-router-dom';
import pic1 from './images/Youtube_logo.png'
import pic2 from './images/hurr.jpeg'
import pic3 from './images/galexy.png'
import pic4 from './images/continual.png'
import pic5 from './images/lucy.png'
import pic6 from './images/box.jpg'
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";



function Projects() {
  const navigate = useNavigate();
  const NavigateProject1 = () => {
    navigate('/project1');
  };
  const NavigateProject2 = () => {
    navigate('/project2');
  };
  const NavigateProject3 = () => {
    navigate('/project3');
  };
  const NavigateProject4 = () => {
    navigate('/project4');
  };
  const NavigateProject5 = () => {
    navigate('/project5');
  };
  const NavigateProject6 = () => {
    navigate('/project6');
  };
  return (
    <>
    <div className='pro'>
    <h1 className='wrapper' >PROJECTS</h1>
    
    <div className='icon2'>

    
    <AiIcons.AiFillBulb />
    <IoIcons.IoIosBuild />
    <MdIcons.MdOutlineScience />
    </div>
 
    <div className='grid'>
        <div className='grid-item' onClick={NavigateProject1}>
          <h2>Youtube Webapp </h2> <br></br>
          <p>performs a sentiment analysis<br></br> on youtube comments</p>
          <br></br>
          <img src={pic1} className='grid-item-pic'/>
        </div>
        <div className='grid-item' onClick={NavigateProject2}>
          <h2>Storm preparedness</h2> <br/> <p>data science <br></br>project </p>
          <br>
          </br>
          
          <img src={pic2} className='grid-item-pic'/>
        </div>
        <div className='grid-item' onClick={NavigateProject3}>
          <h2>Galaxy Classifier </h2><br/> <p>using a pre trained <br></br>Res-NeXt- 50 model</p>
          <br></br>
          <img src={pic3} className='grid-item-pic'/>
        </div>
        <div className='grid-item' onClick={NavigateProject4}>
          <h2>Continual</h2><br/> <p>Mobile App<br></br> Design </p>
          <br></br>
          <img src={pic4} className='grid-item-pic'/>
        </div>
        <div className='grid-item' onClick={NavigateProject5}>
          <h2>Lefty Lucy </h2><br></br><p>video game <br></br>project</p> <br></br>
          <img src={pic5} className='grid-item-pic'/>
        </div>
        <div className='grid-item' onClick={NavigateProject6}>
          <h2>Synth Box </h2><br></br>
          <p>built with a homemade<br></br> stand alone arduino</p>
          <br></br>
          <img src={pic6} className='grid-item-pic'/>
        </div>
    </div>
    </div>
    </>
  );
}

export default Projects;