import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';

const Moviecard = ({title,poster_url}) => {
  return (
    <div className='w-52 bg-black'>
        <img src={IMG_CDN_URL+poster_url} alt='poster-image' className='aspect-square'></img>      
                
    </div>
  )
}

export default Moviecard;