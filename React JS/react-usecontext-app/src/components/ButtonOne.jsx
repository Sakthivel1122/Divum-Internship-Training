import React from 'react'
import { useCountContext } from './CountContext';
const ButtonOne = () => {
    const val = useCountContext();
  return (
    <div className='ButtonOne'>
        <button onClick={() => val.setCount(val.count  +1)}>Increment 1</button>
    </div>
  );
}

export default ButtonOne
