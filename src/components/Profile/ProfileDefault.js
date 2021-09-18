import React from "react";
import styles from '../Styles/ProfileDefault.module.scss';
import Profile from "./Profile";

const ProfileDefault=()=>{
    return(
        <Profile>
            <div className={styles.profileDefault}>Informatii</div>
        </Profile>
    )
}

export default ProfileDefault;