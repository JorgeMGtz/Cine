import React from 'react';
import video from '../assets/CVid1.mp4';
import logo from '../assets/Cam2.png'
import { NavLink } from 'react-router-dom'


function BackGroundVideo() {
  return (
    <div className="bgContainer">
      <video src={video} autoPlay loop muted />
      <div className='VideoContent container' >
        <img src={logo} className='logo' />
        <h2 className="wlc">WELCOME</h2>
        <h2 className="title">WHATCH THE BEST MOVIES  IN B-MORE CINEMA</h2>
        <div className='d-flex justify-content-center'>
          <li className=' nav-item'>
            <NavLink
              className={({ isActive }) => (`link ${isActive ? 'active' : ''}`)}
              to='/Catalogue'>
              Catalogue
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => (`link ${isActive ? 'active' : ''}`)}
              to='/Services'>
              Services
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => (`link ${isActive ? 'active' : ''}`)}
              to='/Movies'>
              Movies
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
}

export default BackGroundVideo