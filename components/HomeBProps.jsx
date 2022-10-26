import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HomeBProps = ({ path, title, para }) => {
    return (
        <>
            <div className="col-md-3 col-sm-6">
                <div className={styles.home_card}>
                    <Image alt="home" src={path} height={40} width={40} />
                    <h5>{title}</h5>
                    <p className={styles.fully_para}>{para}</p>
                </div>
            </div>
        </>
    )
}

export default HomeBProps