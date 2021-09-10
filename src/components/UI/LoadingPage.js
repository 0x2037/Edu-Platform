import React from 'react';
import styles from '../Styles/LoadingPage.module.scss';

import Buffering from '../Media/loading.gif';
const LoadingPage=()=>{
    return(
        <div className={styles.loadingPage}>
            <img src={Buffering} />
            <h1>Please wait!</h1>
            <h1>Your data is loading...</h1>
        </div>
    )
}

export default LoadingPage;