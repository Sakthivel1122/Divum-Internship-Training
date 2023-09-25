import React from 'react'
import "./Services.css";
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
const Service = () => {
  return (
    <>
    <div className='Services'>
      <Outlet/>
    </div>
    </>
  )
}

export default Service