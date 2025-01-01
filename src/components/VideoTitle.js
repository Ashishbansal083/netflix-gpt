import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] md:pt-[12%] px-6 absolute  bg-gradient-to-r from-black md:px-20'>
        <h1 className='text-sm my-2 font-semibold text-white sm:text-lg md:text-2xl  lg:text-3xl '>{title}</h1>
        <p className='w-full my-2 text-white text-xs   md:w-1/4 md:text-sm'>{overview.slice(0,110)+"..."}</p>
        <div >
            <button className='font-semibold text-xs sm:text-sm text-black py-2 px-4 bg-white mx-2 rounded-sm hover:bg-opacity-50'> ▶️Play</button>
            <button className='font-semibold text-xs sm:text-sm text-white py-2 px-4 bg-gray-300 bg-opacity-40 mx-2 rounded-sm'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle