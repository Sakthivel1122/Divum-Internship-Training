import React, { useState } from 'react'
import "./SearchBar.scss"
const SearchBar = ({ state, setState, clearBtnVisible, handleClearBtnVisible }) => {
    const handleClear = () => {
        setState("");
        handleClearBtnVisible(false);
    }
    const handleOnChange = (e) => {
        setState(e.target.value);
        if (e.target.value === "") {
            handleClearBtnVisible(false);
        } else {
            handleClearBtnVisible(true);
        }
    }
    return (
        <div className='SearchBar'>
            <input type="text" value={state} onChange={handleOnChange} className='search-input-box' placeholder='Search for a product' />
            <span className={`material-symbols-outlined search-clear-icon ${clearBtnVisible ? "visible" : "hidden"}`} onClick={handleClear} >
                close
            </span>
            <span className="material-symbols-outlined search-icon">
                search
            </span>
        </div>
    )
}

export default SearchBar