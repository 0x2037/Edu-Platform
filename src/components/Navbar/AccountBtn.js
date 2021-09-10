import React from 'react'
import { Fragment } from 'react';
import styles from '../Styles/AccountBtn.module.scss';
import { Link } from 'react-router-dom';

const AccountBtn=()=>{
    return(
        <div className={styles.accountBtn}>
            <Link to="/login"><button id={styles.loginBtn}>Login</button></Link>
            <Link to="/signup"><button id={styles.signUpBtn}>SignUp</button></Link>
        </div>
    )
}

export default AccountBtn;