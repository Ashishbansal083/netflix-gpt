import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const Secondrycontainer = () => {
  const movie = useSelector(store=>store.movie.nowPlyingmovie)
  return (
    <div>
      <Movielist title={"Now Playing"} movie={movie}/>
      <Movielist title={"Trending"} movie={movie}/>
      <Movielist title={"Upcoming"} movie={movie}/>
      <Movielist title={"Popular"} movie={movie}/>
    </div>
  )
}

export default Secondrycontainer;