import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackround from './VideoBackround';

const Maincontainer = () => {
    const movies = useSelector(store=>store.movie?.nowPlyingmovie)

    if(!movies) return ;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title,overview,poster_path} = mainMovie;
  return (
    <div>
        <VideoBackround poster_Url={poster_path}/>
        <VideoTitle title={original_title} overview={overview}/>
        
    </div>
  )
}

export default Maincontainer