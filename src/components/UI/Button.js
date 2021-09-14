import React from "react";
import styles from '../Styles/Button.module.scss';

const Button=(props)=>{
    return(
        <button className={`${styles.btn} ${props.className}`} id={props.id} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;