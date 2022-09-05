import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CinemaHallPlaces from '../components/CinemaHallPlaces'
import PriceAndBuy from '../components/PriceAndBuy'
import MainContext from '../context/MainContext'

const ReservationPage = () => {

  const {socket, user, movies} = useContext(MainContext)

  const {index} = useParams()

  // const amount = movies[index].selected * 7.99

  return (
    <div>

      <div className='toolbar d-flex'>
        <div>
          <p className='money'>Money: {user.money}</p>
        </div>
        
        <div>
          <p className='amount'>Amount: </p>
        </div>

        <div>
            <button className='buy-tickets'>Buy Tickets</button>
        </div>          
        
      </div>      
      
      <div className='reservation'>
        {movies[index].seats.map((x, i) =>  <CinemaHallPlaces place={x} key={i}/>
        )}
      </div>      
     
     
    </div>
  )
}

export default ReservationPage
