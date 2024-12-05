import React from 'react'

const VideoBackround = ({poster_Url}) => {
  return (
    <div>
        <img src={poster_Url} alt='movie-poster'>
        </img>
    </div>
  )
}

export default VideoBackround