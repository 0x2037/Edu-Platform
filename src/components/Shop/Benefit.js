import React from "react";
import styles from '../Styles/Benefit.module.scss';

import shieldSelected from '../Media/shieldSelected.svg'
const Benefit=(props)=>{
    return(
        <div className={styles.benefit} onClick={props.onClick}>
            <i class="fas fa-shield-alt"></i>
            <p>{props.name}</p>
            <p id={styles.price}>{props.price} RON</p>
        </div>
    )
}

export default Benefit;