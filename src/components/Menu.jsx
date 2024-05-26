import React from 'react'
import {  NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='container-lg'  >
      <nav className='main-navbar' >
            <ul className='d-flex justify-content-center px-5 py-3'>
                <li className='nav-item'>
                    <NavLink 
                        className={({isActive}) => (`link ${isActive? 'active' : ''}`)}
                        to='/Catalogue'>
                        Catalogue    
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink 
                        className={({isActive}) => (`link ${isActive? 'active' : ''}`)}
                        to='/Services'>
                        Services
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink 
                        className={({isActive}) => (`link ${isActive? 'active' : ''}`)}
                        to='/Movies'>
                        Movies   
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu