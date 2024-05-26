import React from 'react';
import video from '../assets/CVid1.mp4';
import logo from '../assets/Cam2.png'
import MCar1 from '../assets/MCar1.jpg'
import MPhantom1 from '../assets/MPhantom1.jpg'
import MRobot1 from '../assets/MRobot.jpg'


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
              <div className="card-group">
               <div className="Card" style={{width: '18rem'}}>
                 <img class="card-img-top" src={MCar1} alt="Card image cap"/>
                 <div className="card-body">
                   <h4 className="cardtitle">Engry and furius</h4>
                   <p className='card-text text-socondary'> In this time te best work is run cars</p>
                 </div>
               </div>
               <div className="MovieCard" style={{width: '18rem'}}>
                 <img class="card-img-top" src={MPhantom1} alt="Card image cap"/>
                 <div className="card-body">
                   <h4 className="cardtitle">Alot Scary uhhh</h4>
                   <p className='card-text text-socondary'> Scary movie is most scary</p>
                 </div>
               </div>
               <div className="MovieCard" style={{width: '18rem'}}>
                 <img class="card-img-top" src={MRobot1 } alt="Card image cap"/>
                 <div className="card-body">
                   <h4 className="cardtitle">Robot future</h4>
                   <p className='card-text text-socondary'> In this time the Robots figth whit the humas for the control </p>
                 </div>
               </div>
              </div>
            </a>
          </nav>

        </div>
    </div>
    
  );
}

export default BackGroundVideo