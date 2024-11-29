import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)

    if(!user){
        navigate("/")
    }
  return  children;
  
}

export default Protected