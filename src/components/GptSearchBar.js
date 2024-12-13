import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center  pt-[10%] '>
        <form className='bg-black  p-2 w-[50%] grid grid-cols-12 rounded-md gap-2'>
            <input placeholder='What do you want to watch today' className='p-2 col-span-9  rounded-md'></input>
            <button className='text-white bg-red-700 col-span-3  rounded-md font-semibold'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;