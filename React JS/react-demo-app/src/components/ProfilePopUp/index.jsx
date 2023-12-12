import React, { useEffect, useRef } from 'react'
import "./ProfilePopUp.scss";
import PrimaryButton from '../../shared/PrimaryButton';
const ProfilePopUp = ({ handleSetProfilePopUp, profileIconRef }) => {
    const containerRef = useRef(null);
    const handleMouseDown = (event) => {
        if (containerRef.current
            && !containerRef.current.contains(event.target)
            && event.target !== (profileIconRef.current)) {
            handleSetProfilePopUp(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        }
    }, []);
    return (
        <div ref={containerRef} className='ProfilePopUp'>
            <p className='user-name'>Sakthivel Arivazhagan</p>
            <p className='user-email-id'>arivazhagan.sakthivel@divum.in</p>
            <PrimaryButton
                label="Sign Out"
                iconClassName="material-symbols-outlined"
                iconContent="logout"
                addEnd={true}
                className = "sign-out-btn"
            />
            <p className='view-profile-text'>View Profile</p>
        </div>
    )
}

export default ProfilePopUp