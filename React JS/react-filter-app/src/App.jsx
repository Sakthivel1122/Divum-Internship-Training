import React from 'react'
import Multifilter from './component/Multifilter'
import SearchFilter from './component/SearchFilter'

const App = () => {
  return (
    <div className='App'>
      <Multifilter/>
      <SearchFilter/>
    </div>
  )
}

export default App