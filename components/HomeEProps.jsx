import React from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css";

const HomeEProps = ({ para, title, imgPath, rowStru, higCus, widCus, cusCss }) => {
    return (
        <>
            <div className={`row ${rowStru} mb-5`}>
                <div className={`col-md-8 ${cusCss}`} >
                    <Image src={imgPath} height={higCus} width={widCus} alt="angle" />
                </div>
                <div className='col-md-4'>
                    <div className={styles.home_needs1}>
                        <h1>{title}</h1>
                        <p>{para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeEProps