import React, { useEffect } from 'react'
import "./NotFound.css"
import { useNavigate } from 'react-router-dom'
const  NotFound = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(() => {
            navigate("/");
        }, 1000);
    },[])
  return (
    <div className='NotFound container'><h1>Page Not Found</h1></div>
  )
}

export default  NotFound