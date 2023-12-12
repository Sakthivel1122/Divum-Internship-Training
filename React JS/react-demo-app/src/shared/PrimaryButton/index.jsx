import React from 'react'
import "./PrimaryButton.scss";

const PrimaryButton = (props) => {
    const {
        label,
        handleOnClick,
        className = "",
        iconClassName = null,
        iconContent = "",
        addStart = false,
        addEnd = false
    } = props;

    return (
        <button className={'PrimaryButton ' + className} onClick={handleOnClick}>
            {
                addStart && <span className={iconClassName + " icon"}>{iconContent}</span>
            }
            {label}
            {
                addEnd && <span className={iconClassName + " icon"}>{iconContent}</span>
            }
        </button>
    )
}

export default PrimaryButton;