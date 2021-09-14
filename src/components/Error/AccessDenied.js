import React from 'react';
import styles from '../Styles/Error.module.scss';
import ErrorImg from '../Media/404.svg';

const AccessDenied=()=>{
    return(
        <div className={styles.error}>
            <img src={ErrorImg}/>
            <h1>Sorry , we couldn't find that page!</h1>
        </div>
    )
}

export default AccessDenied;