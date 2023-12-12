import React, { useRef, useState } from 'react'
import "./Filter.scss";
import FilterPopUp from './FilterPopUp';
const Filter = ({ filterList }) => {
    const [visible, setVisible] = useState(false);
    const filterIconRef = useRef(null);
    const handleOnClick = () => {
        setVisible(!visible);
    }
    const handleSetVisible = (value) => {
        setVisible(value);
    }

    return (
        <div className='Filter'>
            <span ref={filterIconRef} class="material-symbols-outlined filter-icon" onClick={handleOnClick}>
                filter_alt
            </span>
            {
                visible &&
                <FilterPopUp
                    filterIconRef={filterIconRef}
                    filterList={filterList}
                    handleSetVisible={handleSetVisible} />
            }
        </div>
    )
}

export default Filter