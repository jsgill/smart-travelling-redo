import React from 'react';
import styles from "../styles/TripHeader.module.css";

const TripDetailsProps = ({ name, userName }) => {
    return (
        <div className='row justify-content-center gx-0'>
            <div className='col-5'><b>{userName}</b></div>
            <div className='col-1'> <p>:</p></div>
            <div className='col-6' id={styles.card_fill_data}><p>{name}</p></div>
        </div>
    )
}

export default TripDetailsProps;