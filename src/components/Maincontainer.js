import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackround from './VideoBackround';

const Maincontainer = () => {
    const movies = useSelector(store=>store.movie?.nowPlyingmovie)

    if(!movies) return ;

    const mainMovie = movies[0];

    const {original_title,overview,id} = mainMovie;
  return (
    <div>
        <VideoBackround movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
        
    </div>
  )
}

export default Maincontainer