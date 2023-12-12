import React from 'react'
import PrimaryButton from '../../shared/PrimaryButton'
import "./DisplayProduct.scss";

const DisplayProduct = ({title="API",productList}) => {
    return (
        <div className='DisplayProduct'>
            <div className='display-product-header'>
                <p>{title}</p>
                <PrimaryButton label="View All"/>
            </div>
            <div className='display-product-content'>
                
            </div>
        </div>
    )
}

export default DisplayProduct