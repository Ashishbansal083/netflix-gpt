import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[12%] px-20 absolute  bg-gradient-to-r from-black'>
        <h1 className='text-3xl my-2 font-semibold text-white'>{title}</h1>
        <p className='w-1/4 my-2 text-white'>{overview}</p>
        <div >
            <button className='font-semibold text-sm text-black py-2 px-4 bg-white mx-2 rounded-sm hover:bg-opacity-50'> ▶️Play</button>
            <button className='font-semibold text-sm text-white py-2 px-4 bg-gray-300 bg-opacity-40 mx-2 rounded-sm'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle