import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';

const Moviecard = ({title,poster_url}) => {
  if(!poster_url) return null;
  return (
    <div className='w-36 md:w-52 '>
        <img src={IMG_CDN_URL+poster_url} alt='poster-image' className='aspect-square'></img>      
                
    </div>
  )
}

export default Moviecard;