import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
  const data = useParams();
  const obj = useOutletContext();
  return (
    <div className='Book container'>Book {data?.id} {obj.hello}</div>
  )
}

export default Book