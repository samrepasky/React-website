import React, { Component, useRef, useState } from 'react';
import './project1.css'
import * as IoIcons from "react-icons/io";
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import Hero from './components1/heroBackground'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import pic1 from './images/home_page.png'
import pic2 from './images/seacrh_results.png'
import pic3 from './images/video_view.png'
import pic4 from './images/one.gif'
import pic5 from './images/two.png'
import pic6 from './images/three.png'
import pic7 from './images/yt_proj_pic.jpg'


function Project1() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  return (
    <>
    <div >
      
      < IoIcons.IoIosArrowBack className='icon-back'onClick={BackToProject}/>
      
        
    </div>
    <div className = 'Project1'>
    <h1>Youtube Webapp</h1>
    <button className='button1' onClick={()=>{window.open('https://team10sentiment.ue.r.appspot.com');}}>Click here to view deployed project </button>
    <div className='icon-top'>
      
      <IoIcons.IoIosThumbsUp />
      <AiIcons.AiFillYoutube />
      <IoIcons.IoIosThumbsDown />
    </div>
    

    <div className='section'>
      <h2>Overview<AiIcons.AiOutlineBell/></h2>
     <p>How can we judge comments beyond likes and pedantic numbers? Is there a way to really see what users think without relying on forced inputs?<br></br> <br></br>The YTSA is an experimental site that attempts to add a new metric to comment sections: sentiment score. The website YouTube has been chosen for its popularity, ease of API access and organizational structure. The sites core concept is using a machine learning algorithm to automatically rank comments for their emotional content also known as 'sentiment'. This means the direct input from a user can be incorporated in an overall opinion score for a video, channel or content category.</p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>my group and I presenting our prototype at poster day:</p>
     <img src={pic7} />
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Project Timeline<AiIcons.AiOutlineFieldTime/></h2>
      <p>This project is being done over 5 two-week sprints. The due dates for each are as follows:</p>

      <p> -Sprint 1: 02/03/2023</p>
      <p>-Sprint 2: 02/17/2023</p>
      <p>-Sprint 3 (MVP): 03/03/2023</p>
      <p>-Sprint 4: 03/24/2023</p>
      <p>-Sprint 5 (final): 05/7/2023</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Tech Used  <AiIcons.AiFillRobot/></h2>

      <p> Python <FaIcons.FaPython/></p>
      <p>Flask </p>
      <p>SQL-Lite</p>
      <p>HTML/CSS</p>
      <p>JavaScript</p>
      <p>Youtube API</p>
      <p>NLTK & Sentiment Analysis Model</p>
      <p>Google Developers Console</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Wireframes <FaIcons.FaFigma /></h2>
      <p>The user will be welcomed by the home page </p>
      <img src={pic1} />
      <br></br>
      <p>The user will search for the video they would like</p>
      <img src={pic2} />
      <br></br>
      <p>The user will be able to filter out comments on the video view page</p>
      <img src={pic3} />
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Final Prototype <AiIcons.AiFillExperiment/></h2>
      <p>Type any search term you want into the bar at the top. </p>
      <img src={pic4} />
      <br></br>
      <p>Click on a video thumbnail on the search results page that will load. (If you do not see video thumbnails you likely set up your API key incorrectly, please revist the instructions for setup later in this document).</p>
      <img src={pic5} />
      <br></br>
      <p>You will see a page displaying an embedded video. The sentiment score will be under the video and next to each individual comment. This score is between -1 and 1 where 1 is 'maximally positive' and -1 is 'maximally negative'.</p>
      <img src={pic6} />
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Contributors <IoIcons.IoMdPeople /></h2>
      <p>-Jazmine Barnett</p>
      <p>-Hafsa Hassan</p>
      <p>-Robert Tognoni</p>
      <p>-Sam Repasky</p>
    </div>
    <p>__________________________________________________</p>
    
    </div>
      </>
    
  )
}

export default Project1;