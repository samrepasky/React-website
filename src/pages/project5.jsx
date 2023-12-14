import React, { Component } from 'react';
import * as IoIcons from "react-icons/io";
import './project1.css'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";


function Project5() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  return (
    <div className= 'Project1'>
    < IoIcons.IoIosArrowBack className='icon-back'onClick={BackToProject}/>
    <h1>Lefty Lucy: Video Game Project</h1>
    <button className='button1' onClick={()=>{window.open('https://github.com/omarkmu/lefty-lucy');}}>Click here to view code in Git </button>
    <div className='icon-top-3'>
 
 <AiIcons.AiOutlineDotChart />
 <GiIcons.GiBrain />
 <SiIcons.SiJupyter />
</div>
      <div className='section'>
      <h2>Video <FaIcons.FaVideo /></h2>
        <div className = 'vid'>
        <ReactPlayer
          url='https://youtu.be/YYytYiv6U8k'
          className='react-player'
          controls ='true'
        
          />
      </div>
      </div>
      <p>__________________________________________________</p>
      <div className='section'>
       <h2>technology used <MdIcons.MdBiotech /></h2>
       <p>-Phaser</p>
       <p>-Typescript</p>
       <p>-Javascript</p>
       </div>
       <p>__________________________________________________</p>
      <div className='section'>
        <h2>Overview <GiIcons.GiTechnoHeart /></h2>
        <p>Welcome to Lucy’s world! A world where everyone is right handed living under the reign of their king, Righty Tighty, who outlawed all left handed people many years ago. Lucy, the last left handed person, has hidden in plain sight in fear someone will uncover her secret and have her killed. Her father, who she believes to be dead, leads an underground left handed resistance who, in time, will battle king Tighty in an attempt to bring down the right handed overlord. Follow along as lucy and her journey to the resistance, her father. Help her gain strength as she prepares to fight king Tighty and change the world. </p>
      </div>
      <p>__________________________________________________</p>
      <div className='section'>
      <h2>Contributors <IoIcons.IoMdPeople /></h2>
      <p>-Omar</p>
      <p>-Eric Burch</p>
      <p>-Sanjana Bhat</p>
      <p>-Sam Repasky</p>
    </div>
    <p>__________________________________________________</p>
    </div>
  )
}

export default Project5;