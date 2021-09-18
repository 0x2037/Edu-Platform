import React from 'react';
import styles from '../Styles/ProfileSettings.module.scss';
import Profile from './Profile';

const ProfileSettings=()=>{
    return(
        <Profile>
            <div className={styles.profileSettings}></div>
        </Profile>
    )
}

export default ProfileSettings;