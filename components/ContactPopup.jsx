import React from 'react';
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ContactPopup = ({ open, img, header }) => {
    return (
        <div>
            {
                open ?
                    <Popup position="top" open={open} contentStyle={{ borderRadius: "20px", width: "60%" }}>
                        {
                            <div className={styles.model}>
                                <div className={styles.popup_img11}>
                                    <Image src={img} width="110px" height="110px" alt="popup" />
                                </div>
                                <p className={styles.header}>{header}</p>
                                <div className={styles.popup_view_details}>
                                    <Link href="/"><a><button className={styles.popup_btn}>Success</button></a></Link>
                                </div>
                            </div>
                        }
                    </Popup> : null
            }
        </div>
    )
}

export default ContactPopup