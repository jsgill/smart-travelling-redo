import React, { useState } from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const HomeCProps = ({ imgPath, title, para, link }) => {
    const [open, setOpen] = useState(false)
    const popupOne = (url) => {
        if (typeof window !== "undefined") {
            const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
            const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
            const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            const systemZoom = width / window.screen.availWidth;
            const left = (width - 900) / 2 / systemZoom + dualScreenLeft
            const top = (height - 600) / 2 / systemZoom + dualScreenTop
            const newWindow = window.open(url, 'pdf',
                `
              scrollbars=yes,
              width=${900 / systemZoom},
              height=${600 / systemZoom},
              top=${top},
              left=${left}
              `
            )
            if (window.focus) newWindow.focus();
        }
    }
    return (
        <div onClick={() => { link == false ? setOpen(true) : popupOne(`${link}`) }}>
            <Image src={imgPath} height={900} width={800} alt="slider" className={styles.slider_pdf} />
            {open &&
                <Popup open={open} modal className={styles.center_popup_open} contentStyle={{ width: "90vh", overflow: "hidden", backgroundSize: "cover" }} onClose={() => setOpen(false)}>
                    {close => (
                        <div className={styles.modal}>
                            <button className={styles.close} onClick={close}>
                                &times;
                            </button>
                            <div className={styles.content}>
                                <div className='row justify-content-center pt-3'>
                                    <div className='col-8'>
                                        <div className={styles.group3}>
                                        </div>
                                    </div>
                                    <div className='col-4 '>
                                        <div className={styles.group4}>
                                        </div>
                                    </div>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className={styles.home_popup_title}>
                                        <h2>Manali</h2>
                                    </div>
                                    <div className={styles.home_popup_para}>
                                        <div><i className="fa fa-circle" ></i><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                        <div><i className="fa fa-circle" ></i><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                    </div>

                                    <div className={styles.Popup_bottom_button}>
                                        <Link href="/tripSectionOne">
                                            <a className="btn" id={styles.home_popup_planYourTrip} type="button">
                                                <span>Plan your Trip</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>

            }
            <div className={styles.pdf_para}>{para}</div>
            <div className={styles.home_carousal_title}>{title}</div></div>
    )
}

export default HomeCProps