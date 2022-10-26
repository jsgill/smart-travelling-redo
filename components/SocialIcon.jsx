import React from 'react';
import styles from "../styles/Contact.module.css";

const SocialIcon = ({ icon1, icon2, icon3, insta, linkdin }) => {
    return (
        <div className="d-flex justify-content-end" id={styles.contact_social11}>
            <div className={styles.contact_social_icon}>
                <i className={icon1} id={styles.social_icon33}></i>
            </div>
            <div className={styles.contact_social_icon}>
                <a href={insta} rel="noreferrer" target="_blank">
                    <i className={icon2} id={styles.social_icon33}></i>
                </a>
            </div>
            <div className={styles.contact_social_icon}>
                <a href={linkdin} rel="noreferrer" target="_blank">
                    <i className={icon3} id={styles.social_icon33}></i>
                </a>
            </div>
        </div>
    )
}

export default SocialIcon