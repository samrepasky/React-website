import React, { useState, useEffect } from 'react'
import './popup.css';


function Popup(props) {
useEffect(() => {
    setTimeout(() => {
        setTimedPopup(false);
    }, 3000);
}, [])
    

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}> close </button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup