import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-60  px-20'>
        <h1 className='text-3xl my-2 font-semibold'>{title}</h1>
        <p className='w-1/4 my-2'>{overview}</p>
        <div>
            <button className='font-semibold text-black py-2 px-4 bg-white'> ▶️Play</button>
            <button className='font-semibold text-white py-2 px-4 bg-gray-300'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle