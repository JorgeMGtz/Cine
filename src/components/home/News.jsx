import React from 'react'
import Coffe from '../assets/Coffe.jpg'
import Game from '../assets/VideoGames.jpg'
import Gym from '../assets/Gym.jpg'


const News = () => {
  return (
    <div className='container'>
      <div className='newsCard'>
        <div className="newsBoxCard">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={Coffe} className='grid-img' />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className='d-flex flex-column justify-content-bewteen'>
                <h5 className='Card-tittle'>Food Marked</h5>
                <p className='card-text'>Visit the new food court In this new area you will find international food. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="newsBoxCard">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className='d-flex flex-column justify-content-bewteen'>
                <h5 className='Card-tittle'>Game Zone</h5>
                <p className='card-text'>We are waiting for you in our play area</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <img src={Game} className='grid-img' />
            </div>
          </div>
        </div>

        <div className="newsBoxCard">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src={Gym} className='grid-img' />
            </div>
            <div className="col-sm-12 col-md-6">
              <div className='d-flex flex-column justify-content-bewteen'>
                <h5 className='Card-tittle'>Gym</h5>
                <p className='card-text'>The change is in your serlf, come and trainning whit os </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News