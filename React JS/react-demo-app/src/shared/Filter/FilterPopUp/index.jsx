import React, { useEffect, useRef } from 'react'
import "./FilterPopUp.scss";

const FilterPopUp = ({filterIconRef,filterList,handleSetVisible}) => {
    const containerRef = useRef(null);
    const handleMouseDown = (event) => {
        if(containerRef.current && !containerRef.current.contains(event.target) && event.target !== filterIconRef.current){
            handleSetVisible(false);
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown", handleMouseDown);
    },[])
    return (
        <ul ref={containerRef} className='FilterPopUp'>
            {
                filterList && filterList.map((filterItem,index) => {
                    return <li key={index} className='filter-item'>{filterItem.itemName}</li>
                })
            }
        </ul>
    )
}

export default FilterPopUp