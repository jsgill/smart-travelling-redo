import React from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css";

const HomeEProps = ({ para, title, imgPath, ind, rowStru, higCus, widCus, cusCss, id }) => {
    return (
        <>
            <div className={`row ${rowStru} mb-8 align-items-center`}>
                <div className={`${ind == 1 ? "col-md-7" : "col-md-8"} ${cusCss}`} id={ind == 1 ? styles.worksImageAlignment : styles.worksImageAlignment}>
                    <Image src={imgPath} height={higCus} width={widCus} alt="angle" />
                </div>
                <div className={`${ind == 1 ? "col-md-5" : "col-md-4"}`} id={ind == 1 ? styles.textttAlignment : styles.worksImageAlignment}>
                    <div className={`${ind == 1 ? styles.textAlignment : styles.home_needs1}`}>
                        <h1>{title}</h1>
                        <p>{para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeEProps