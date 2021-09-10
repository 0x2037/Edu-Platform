import React from 'react';
import styles from '../Styles/Notification.module.scss';

import Card from './Card';

const Notification=(props)=>{

    return(
        <Card className={}>
            {props.children}
        </Card>
    )
}

export default Notification;