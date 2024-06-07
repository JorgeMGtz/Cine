import React from 'react'
import MCar1 from '../assets/MCar1.jpg'
import MPhantom1 from '../assets/MPhantom2.jpg'
import MRobot1 from '../assets/MRobot2.jpg'
const TrenddingMovies = () => {
    return (
        <div className="card-group ">
            <div className="movieCard" >
                <img className="card-img-top" src={MCar1} alt="Car" />
                <div className="card-body">
                    <h4 className="cardtitle">Engry and furius</h4>
                    <p className='card-text text-socondary'> In this time te best work is run cars</p>
                    <a href='#!' className='btn btn-outline-primary'>Buy your tickets now</a>
                </div>
            </div>

            <div className="movieCard">
                <img className="card-img-top" src={MPhantom1} alt="phan" />
                <div className="card-body">
                    <h4 className="cardtitle">A very very Scary uhhh</h4>
                    <p className='card-text text-socondary'> Scary movie is most scary</p>
                    <a href='#!' className='btn btn-outline-primary'>Buy your tickets now</a>
                </div>
            </div>
            <div className="movieCard">
                <img className="card-img-top" src={MRobot1} alt="Robots para peli" />
                <div className="card-body">
                    <h4 className="cardtitle">Robot attack</h4>
                    <p className='card-text text-socondary'> In this time the Robots figth whit the humas for the control </p>
                    <a href='#!' className='btn btn-outline-primary'>Buy your tickets now</a>
                </div>
            </div>
        </div>
        
    )   
}

export default TrenddingMovies