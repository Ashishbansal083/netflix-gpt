import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants';

const Moviecard = ({title,poster_url}) => {
  return (
    <div className='border-black border-2'>
        <img src={IMG_CDN_URL+poster_url}></img>        
        <h1>{title}</h1>        
    </div>
  )
}

export default Moviecard;