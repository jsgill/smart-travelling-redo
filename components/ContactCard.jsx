import React from 'react';
import styles from "../styles/Contact.module.css";
import Image from "next/image";

const ContactCard = ({ img, name, text, link1, link2, link3 }) => {
    return (
        <div className="mb-3 col-xl-5 col-md-5 col-lg-5 col-sm-12 text-center" >
            <div className='card' id={styles.contact_card_one}>
                <div className={styles.contact_user_one}>
                    <Image src={img} width="214px" height="214px" alt="user-one" />
                </div>
                <div className="card-body p-0 text-center">
                    <p className="card-title" id={styles.contact_card_title}>{name}</p>
                    <small className={`card-text ${styles.text_div}`} id={styles.contact_card_text}>{text}</small>
                    <div className={styles.all_icons}>
                        <div id={styles.user_icons}>
                            <a href={link1} rel="noreferrer" target="_blank"><i className="fa fa-envelope" id={styles.user_icon33}></i></a>
                        </div>
                        <div id={styles.user_icons}>
                            <a href={link2} rel="noreferrer" target="_blank"><i className="fa fa-instagram" id={styles.user_icon33}></i></a>
                        </div>
                        <div id={styles.user_icons}>
                            <a href={link3} rel="noreferrer" target="_blank">
                                <i className="fa fa-linkedin" id={styles.user_icon33}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard