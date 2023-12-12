import React, { useState } from 'react'
import "./MyProducts.scss";
import PrimaryButton from '../../shared/PrimaryButton';
import SearchBar from '../../shared/SearchBar';
import Filter from '../../shared/Filter';
import { apiList, homeSideBarItemList } from '../../data/homeSideBarItemList';
import DisplayProduct from '../../components/DisplayProduct';
const MyProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [clearBtnVisible, setClearBtnVisible] = useState(false);
  const filterList = homeSideBarItemList[1].subItemList;
  const handleSetSearchValue = (value) => {
    setSearchValue(value);
  }
  const handleAddProductsbtn = () => {
  }
  const handleClearBtnVisible = (value) => {
    setClearBtnVisible(value);
  }

  return (
    <div className='MyProducts'>
      <div className='myproducts-header'>
        <p className='title'>My Products</p>
        <div className='myproducts-header-wrapper'>
          <SearchBar
            state={searchValue}
            setState={handleSetSearchValue}
            clearBtnVisible={clearBtnVisible}
            handleClearBtnVisible={handleClearBtnVisible} />
          <Filter filterList={filterList} />
          <PrimaryButton
            label="Add Product"
            handleOnClick={handleAddProductsbtn}
            iconClassName="material-symbols-outlined"
            iconContent="add"
            addStart={true} />
        </div>
      </div>
      <DisplayProduct title='API' productList={apiList} />
    </div>
  )
}

export default MyProducts