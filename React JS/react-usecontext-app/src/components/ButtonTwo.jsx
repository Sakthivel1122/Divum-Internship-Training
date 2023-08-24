import React from 'react'
import { useCountContext } from './CountContext';
const ButtonTwo = () => {
    const val = useCountContext();
  return (
    <div className='ButtonOne'>
        <button onClick={() => val.setCount(val.count  +1)}>Increment 2</button>
    </div>
  );
}

export default ButtonTwo
