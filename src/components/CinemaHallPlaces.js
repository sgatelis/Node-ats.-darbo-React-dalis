import React from 'react'

const CinemaHallPlaces = ({place}) => {
  return (
    <div className='hall'>
      <div>{place.seatNumber}</div>
      <div>{place.reserved}</div>
      <div>{place.price}$</div>
    </div>
  )
}

export default CinemaHallPlaces
