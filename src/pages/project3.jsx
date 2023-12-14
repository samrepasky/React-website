import React, { Component } from 'react';
import * as IoIcons from "react-icons/io";
import './project1.css'
import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import pic1 from './images/galpals.jpg'

function Project3() {
  const navigate = useNavigate();
  const BackToProject = () => {
    navigate('/Projects');
  };
  return (
    <div className= 'Project1'>
             < IoIcons.IoIosArrowBack className='icon-back'onClick={BackToProject}/>

    <h1>Galexy Classification</h1>

    <button className='button1' onClick={()=>{window.open('https://github.com/saiT1108/DS_project/blob/sai-branch/main.ipynb');}}>Click here to view code in Git </button>
    <div className='icon-top-3'>
 
 <AiIcons.AiOutlineDotChart />
 <GiIcons.GiBrain />
 <SiIcons.SiJupyter />
</div>
<div className='section'>
      <h2>Overview  <FaIcons.FaGlasses /></h2>
      <p>This project makes use of ResNeXt, a pre-trained CNN model, to classify an input image as 1 of 8 different types of galaxies. We will collect and preprocess labeled galaxy images from EFIGI dataset which culminates from several European observatories in conjunction with Hubble Space Telescope. Next we will initialize our pre-trained CNN model and get ready for fine tuning. We will retrain pretrained layers with a small learning rate, so the model doesn’t change too much. Instead of training the whole model again we will use Transfer Learning. We will use a Cross Entropy Loss function to retrain our model. Then, we will Evaluate the model's performance using metrics such as accuracy, precision, recall, and F1-score. </p>
      <br>
      </br>
      <br></br>
      <p>This project won third place at Georgia State University poster day Spring 2023</p>
      <img src={pic1} />
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Project Timeline<AiIcons.AiOutlineFieldTime/></h2>
      <p> -Project Proposal</p>
      <p>-preliminary report</p>
      <p>-Final project presentation</p>
      <p>-Poster day Presentation</p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Tech Used  <AiIcons.AiFillRobot/></h2>

      <p> Python <FaIcons.FaPython/></p>
      <p>Numpy </p>
      <p>Pandas</p>
      <p>Machine Learning</p>
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Normalizing data <FaIcons.FaRegChartBar /></h2>

      <p>To prepare the data before entering the neural network we chose to crop the images randomly to 224 and added a padding of 4 to the boarder of the images. This was done to introduce more variability into the training data. Likewise, We flipped some pictures horizontally to increase the variety of images presented to the model during training. Following standard practice we used a ToTensor method to convert the images to pytorch tensors, then we normalized those tensors to ensure that each feature has a similar scale. </p>
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Custom Data Loader <br></br>for Image set <AiIcons.AiOutlineLoading3Quarters /></h2>

      <p>  We used a custom PyTorch dataset named CustomDataset. The class implements two methods that are required for any PyTorch dataset: __len__ and __getitem__. The __len__ method returns the number of items in the dataset, which is simply the length of the img_list. The __getitem__ method takes an index idx and returns the image and its corresponding label at that index. Within the __getitem__ method, the image is opened using the Image module from the PIL (Python Imaging Library) and converted to RGB format. If a transform is provided, it is applied to the image. Finally, the corresponding label is retrieved from the label_list and the image-label pair is returned as a tuple.</p>
    
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2> Experiment and Results <FaIcons.FaRegSmileBeam /></h2>

      <p> Initially, using Wide-ResNet resulted in only 40 percent accuracy due to its inability to effectively handle the nuanced differences among galaxies. To address this, we explored alternative models like ResNeXt, which excels in capturing subtle details during training. We translated the images into a table, reducing 18 galaxy types to 8 classifications. Normalizing the images with ResNeXt50's mean and standard deviation, we split the data into 85 percent for validation and 15 percent for training. Minibatches with 64 images per batch size were employed to enhance generalization. To further improve performance, we utilized 25 epochs, fine-tuned learning rates, and implemented specific layers for predicting galaxy classes. These layers included a linear layer with 2048 input features, ReLu activation, and mapping 128 features to predict galaxy shapes. </p>
    </div>
    <p>__________________________________________________</p>
    <div className='section'>
      <h2>Contributors <IoIcons.IoMdPeople /></h2>
      <p>-Sai Tippana</p>
      <p>-Cierra Koen</p>
      <p>-Sam Repasky</p>
    </div>
    <p>__________________________________________________</p>
    
    </div>
  )
}

export default Project3;