import {useContext, useEffect, useState} from 'react'
import MainContext from '../context/MainContext'
import SingleMovie from '../components/SingleMovie'

const MoviePage = () => {

  const {socket, user, movies, setMovies} = useContext(MainContext)

      
   
  

  return (
    <div>
      <div className='movie'>
       <p className='movies t-center'>Filmai</p>
        {movies.map((x, i) => <SingleMovie item={x} index={i} key={i}/>)}
      </div>
    </div>
  )
}

export default MoviePage
