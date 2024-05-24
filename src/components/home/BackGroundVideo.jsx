import React from 'react';
import video from '../assets/CVid1.mp4';
import logo from '../assets/Cam2.png'


function BackGroundVideo ()  {
  return (
    <div className="bgContainer">      
        <video  src={video} autoPlay loop muted />
        <div className="container">
          <img src={logo}/> 
          <h2 className="wlc">WELCOME</h2>
          <h2 className="title">WHATCH THE BEST MOVIES  IN B-MORE CINEMA</h2>
          <nav>
            <a>
              Movies
            </a>
          </nav>
        </div>
    </div>
    
  );
}

export default BackGroundVideo