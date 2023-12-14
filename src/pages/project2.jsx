import React, { Component } from 'react';
import * as IoIcons from "react-icons/io";
import './project2.css'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";






function Project2() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  
  return (
    <>
    <div className= 'Project1'>
     < IoIcons.IoIosArrowBack className='icon-back'onClick={BackToProject}/>
     <h1>Storm Preparedness Data Science Project</h1>

     <button className='button1' onClick={()=>{window.open('https://github.com/saiT1108/DS_project/blob/sai-branch/main.ipynb');}}>Click here to view code in Git </button>
     <div className='icon-top-2'>
      
      <AiIcons.AiOutlineDotChart />
      <AiIcons.AiFillDatabase />
      <SiIcons.SiJupyter />
    </div>
     <div className='section'>
      <h2>Introduction: <br></br>Business Problem <br></br>and Understanding <MdIcons.MdBusinessCenter /></h2>
<p>Tornadoes can cause a lot of damage, and because of this government agencies and companies need to know when and where to direct their resources to to repair any damages caused. Being able to predict when and where tornadoes will most likely occur will allow these organizations to prepare in advance to reduce the negative after effects of tornadoes. </p>
   <p>With global warming worsening, severe weather events - such as tornadoes - may be occurring more frequently. Therefore, government agencies and companies need to know where to direct their resources to mitigate the negative effects of tornadoes. Being able to predict when and where tornadoes will most likely occur will allow these organizations to prepare in advance.</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Project Timeline <AiIcons.AiOutlineFieldTime/></h2>
      <p>This Project was due in three stages:</p>

      <p> -Project Proposal</p>
      <p>-Data Quality report and Business understanding</p>
      <p>-Final project presentation</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Tech Used  <AiIcons.AiFillRobot/></h2>

      <p> Python <FaIcons.FaPython/></p>
      <p>Pandas </p>
      <p>Matlibplot</p>
      <p>Machine Learning Algorithms</p>
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Dataset: proprocessing <br></br>and exploration <MdIcons.MdDataExploration /></h2>
      <p>Our dataset details instances of severe weather across a ten-year period from 2010 to 2021. The dataset shows us the following information about tornados: the date it occurred, the state it occurred in, any deaths or injuries, any property damage, and other descriptive data regarding the damage and magnitude of the tornadoes such as: Fujita Scale for Tornado Intensity (E0 -E5), Crop Damage, Total Harm, Total Area. We will be using this dataset to predict the property damage caused by future tornadoes in regions across America. There were not many missing values to begin with, so deleting them did not impact our dataset and results. Pre-normalization: We looked at outliers, but chose not to remove them because the data was heavily skewed right.</p>
   <p>Log normalization: Our data was heavily skewed right, by applying log normalizing it helped to reduce the skew significantly
Binning We binned the target feature (property damage) with equi-width distribution transforming it from varying numerical ranges to predictable categorical bins [scale of 1-10] that will be used for the predictive models</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Models chosen<MdIcons.MdTagFaces /></h2>
   <p>Model 1 decision tree: We chose to make a decision tree to explain our prediction analysis in the simplest way possible.  (Most of the information we needed to predict the target property damage was continuous). The features selected were total harm and total area of the tornado. We chose these features because they have the most direct impact on a tornado’s severity: Total Area - indicates the area of impact, Total Harm - includes the casualties caused by the tornado. </p>
    <p>Model 2:  Naive Bayesian & Gaussian. We chose this model, because some businesses might ask: “What’s the likelihood of a tornado causing a lot of damage, given the state, month, size, scale, etc. of said tornado?”. The features selected were: [STATE, YEAR, MONTH_NAME, CZ_NAME, TOR_F_SCALE, HARM_TOTAL]. These were chosen after measuring the accuracy benefits of all features and finalizing these as the most beneficial. Binned all features (for Categorical Naive Bayes), transforming continuous features into scales of 1-10. Encoded categorical features to match numerical classification</p>
    <p>Model 3 - K Nearest Neighbor. We implemented this similarity based predictive analysis to predict the target feature -  damage_property -  based on comparable instances where similar degrees of total harm and size caused similar magnitudes of damage. We chose total harm and damage area as our features due to their greater impact on a tornado’s magnitude and damage property (our target). </p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Model's Performance <AiIcons.AiFillExperiment/></h2>
      <p>Decision tree discovered - 37% accuracy </p>
      <p>KNN classifier discovered - 43% accuracy</p>
      <p>Naive Bayes discovered - ~53% accuracy</p>

<p>Based on the accuracy scores shows above, the Naive Bayes model shows to be the most suitable model. 
In addition, based on our data visualizations, during the spring months in area of the midwest of the United States are when tornadoes with high property damage is most likely to occur.</p>
   
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Contributors <IoIcons.IoMdPeople /></h2>
      <p>-Sai Tippana</p>
      <p>-Doris Sanchez-Velasquez</p>
      <p>-Sahiti Gellala</p>
      <p>-Sam Repasky</p>
      <p>-Sophia Bell</p>
    </div>
    <p>__________________________________________________</p>
    
    </div>
    
  
    </>
  )
}

export default Project2;