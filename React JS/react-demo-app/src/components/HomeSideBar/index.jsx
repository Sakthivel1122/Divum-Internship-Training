import React, { useState } from 'react'
import "./HomeSideBar.scss";
import { homeSideBarItemList } from '../../data/homeSideBarItemList';
import SideBarItem from '../SideBarItem';
const HomeSideBar = () => {
  const [SideBarItemList,setSideBarItemList] = useState(homeSideBarItemList);
  return (
    <div className='HomeSideBar'>
      {
        SideBarItemList && SideBarItemList.map((subItem) => {
          return <SideBarItem subItem={subItem}/>
        })
      }
    </div>
  )
}

export default HomeSideBar