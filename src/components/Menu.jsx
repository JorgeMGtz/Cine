import React from 'react'
import {  NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='main-navbar'>
        <ul className='d-flex justify-content-end px-5 py-3'>
            <li className='nav-item'>
                <NavLink 
                    className={({isActive}) => (`link ${isActive? 'active' : ''}`)}
                    to='/'>
                    Catalogue    
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink 
                    className={({isActive}) => (`link ${isActive? 'active' : ''}`)}
                    to='/'>
                    Services
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink 
                    className={({isActive}) => (`link ${isActive? 'active' : ''}`)}
                    to='/'>
                    Movies   
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu