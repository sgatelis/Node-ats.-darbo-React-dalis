import React from 'react'
import { useNavigate } from 'react-router-dom'


const SingleMovie = ({item, index}) => {  

  const nav = useNavigate()

  function movieInfo() {

    nav("/reservation/"+ index)

  }
    
  return (
    <div onClick={movieInfo} className="singleMovie" >
      <img src={item.image} alt=""/>
      <h1>{item.title}</h1>
      <p>Census: {item.census}</p>
      <p>Year: {item.year}</p>
      <p>Seats: 50{item.seats.seatNumber}/out of 50</p>
     
    </div>
  )
}

export default SingleMovie
