import React from "react";
import styles from '../Styles/Progress.module.scss';
import Profile from "./Profile";

const Progress=(props)=>{
    return(
        <Profile>
            <div className={styles.progress}>Progress</div>
        </Profile>
    )
}

export default Progress;