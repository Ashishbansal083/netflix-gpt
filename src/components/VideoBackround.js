import React, { useEffect } from 'react'
import { FETCH_OPTIONS } from '../utils/Constants';

const VideoBackround = ({movieId}) => {

  const getMovievideos=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1241982/videos?language=en-US',FETCH_OPTIONS);
    const json = await data.json();
    const filteredData = json.results.filter(video=>video.type==="Trailer")
    const Trailer = filteredData[0];
  }
  useEffect(()=>{
    getMovievideos();
  },[])
  return (
    <div>
        image
    </div>
  )
}

export default VideoBackround