import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image';

const HomeCProps = ({ imgPath, title, para }) => {
    return (
        <>
            <div>
                <Image src={imgPath} height={900} width={800} alt="slider" className={styles.slider_pdf} />
                {/* {open ? <SmartTravllerPopup img={imgPath} circle={manali_popup1} /> : null} */}
            </div>
            <div className={styles.pdf_para}>
                {para}
            </div>
            <div className={styles.home_carousal_title}>
                {title}
            </div>
        </>
    )
}

export default HomeCProps