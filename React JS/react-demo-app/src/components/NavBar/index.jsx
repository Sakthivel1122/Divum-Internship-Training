import React, { useRef, useState } from 'react'
import "./NavBar.scss";
import ProfilePopUp from '../ProfilePopUp';
const NavBar = () => {
    const [profilePopUpVisible, setProfilePopUpVisible] = useState(false);
    const profileIconRef = useRef(null);
    const handleSetProfilePopUp = (value) => {
        setProfilePopUpVisible(value);
    }
    const handleOnClick = () => {
        setProfilePopUpVisible(!profilePopUpVisible);
    }
    return (
        <div className='NavBar'>
            <div className='navbar-wrapper'>
                <h2 className='logo'>BOSCH</h2>
                <div className='profile-item'>
                    <p className='text-content'>Unified Seller Portal</p>
                    <button ref={profileIconRef} onClick={handleOnClick} className="material-symbols-outlined profile-icon">
                        account_circle
                    </button>
                    {
                        profilePopUpVisible &&
                        <ProfilePopUp
                            profileIconRef={profileIconRef}
                            handleSetProfilePopUp={handleSetProfilePopUp}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar