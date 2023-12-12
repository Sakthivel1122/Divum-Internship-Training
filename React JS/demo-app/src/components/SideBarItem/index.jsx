import React, { useState } from 'react'
import "./SideBarItem.scss";
import { useNavigate } from 'react-router-dom';
const SideBarItem = ({ itemLevel = 0, subItem }) => {
    const { itemName, isHaveSubList } = subItem;
    const [visibe, setVisible] = useState(false);
    const navigate = useNavigate();
    const handleOnClick = () => {
        setVisible(!visibe);
        if(subItem.path){
            navigate(subItem.path);
        }
    }
    return (
        <div className='SideBarItem' style={{ marginLeft: `${itemLevel}rem`, width: `calc(100% - ${itemLevel}rem)` }}>
            <button className='sidebar-item-wrapper' onClick={handleOnClick}>
                <p>
                    {itemName}
                </p>
                {
                    isHaveSubList &&
                    <span className="material-symbols-outlined down-arrow-icon" style={{ transform: visibe ? 'rotate(180deg)' : "" }}>
                        expand_more
                    </span>
                }
            </button>
            {

                visibe && (isHaveSubList === true && (
                    subItem.subItemList?.map((subItem, index) => {
                        return <SideBarItem key={index} itemLevel={itemLevel + 1} subItem={subItem} />
                    })
                ))
            }
        </div>
    )
}

export default SideBarItem