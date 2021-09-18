import React from 'react'
import styles from '../Styles/Profile.module.scss';
import ProfileNav from './ProfileNav';


const Profile=(props)=>{
    return(
        <div className={styles.profile}>
            <ProfileNav />
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Profile;