import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const Secondrycontainer = () => {
  const movie = useSelector(store=>store.movie.nowPlyingmovie)
  return (
    <div>
      <Movielist title={"Now Playing"} movie={movie}/>
    </div>
  )
}

export default Secondrycontainer;