import React from "react";
import styles from '../Styles/Benefit.module.scss';

import shieldSelected from '../Media/shieldSelected.svg'
const Benefit=(props)=>{
    return(
        <div className={styles.benefit}>
            <i class="fas fa-shield-alt"></i>
            <p>Beneficiu</p>
        </div>
    )
}

export default Benefit;