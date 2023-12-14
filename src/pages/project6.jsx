import React, { Component } from 'react';
import * as IoIcons from "react-icons/io";
import './project2.css'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import { Player, ControlBar, PlayToggle, BigPlayButton } from 'video-react';
import vid from './images/boxsound.mp4';
import ReactPlayer from 'react-player'


function Project6() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  return (
    <div className= 'Project1'>
    < IoIcons.IoIosArrowBack className='icon-back'onClick={BackToProject}/>

        <h1>Granular Synth Box</h1>
        <h3>Notes and volts tutorial</h3>
        <button className='button1' onClick={()=>{window.open('https://www.notesandvolts.com/2014/07/build-auduino-granular-synth-part-1.html');}}>Click here to view tutorial </button>
        <div className='icon-top-6'>
        <GiIcons.GiCircuitry />
        <SiIcons.SiArduino />
        <GiIcons.GiSolderingIron />
</div>


<div className='section'>
    <h2>Demo <FaIcons.FaVideo /></h2>

      <div className = 'vid'>
      <ReactPlayer
      url={[vid]} 
      className='react-player'
      width='70%'
      height='70%'
      controls ='true'
      
      />


      </div>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Summary <FaIcons.FaPaperPlane /></h2>

      <p>The following information in this section was taken from the notes and volts tutorial page. For more information please click the green button at the top of the page </p>
    <p>In this tutorial we will take a look at building a stand-alone version of the Auduino Granular Synthesizer (pronounced AWE-duino not ARR-duino) and housing it in a spiffy looking custom enclosure. Even if you're not the musical type, the techniques outlined here may give you some inspiration for future projects so it is definitely worth a look.</p>
    <p>Originally designed by Peter Knight for Tinker.it, this circuit is extremely fun to play with and will readily find a home in your arsenal of electronic noise makers. And since it requires only a few extra parts, it really provides a lot of bang for your buck.</p>
    <p>Sound is generated by playing the same noise ('grain') repeatedly at very high speed. This merges into a tone that is an audible hybrid of the repetition rate and the original grain. It sounds quite similar to an oscillator with two resonating bandpass filters, although the different architecture means there are lots of additional interesting noises at parameter extremes.

The grain consists of two triangular waves of adjustable frequency, and adjustable decay rate. This is based on FOF synthesis model, but using triangle waves instead of sine and using a rectangular window.

The repetition rate is set by another control.</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Skills Used <FaIcons.FaRobot /></h2>

      <p>-Arduino</p>
      <p>-Soldering</p>
      <p>-Reading Scematics</p>
      <p>-Programming IC Chips</p>
    </div>
    <p>__________________________________________________</p>
    </div>
  )
}

export default Project6;