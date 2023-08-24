import React from 'react'
import { useUserContext } from './DashboardContext'

const DemoComp = () => {
    const user = useUserContext();
  return (
    <div>{user.name}</div>
  )
}

export default DemoComp