import React from 'react';
import styles from "../styles/Home.module.css";
import rightarrow from '../public/images/home/Arrow-Right.png';
import Image from 'next/image';
import Link from 'next/link';
import { waterfall_img, riverside_img } from "../public/imagesList/list";

const HomeD = () => {
    return (
        <div className='container mb-5'>
            <div className='row justify-content-center'>
                <div className={styles.home_happening}>
                    <h1>Happening Now.....</h1>
                </div>
            </div>
            <div className='row justify-content-center' >
                <div className='col-md-8 text-center' >
                    <div className='row'>
                        <div className='col-md-12  mb-5 mb-md-0' >
                            <div className={styles.happeningNow_container}>
                                <div className='row'>
                                    <div className='col-md-4'  >
                                        <div id={styles.image1} style={{ backgroundImage: `url(${waterfall_img})` }}></div>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='container px-4'>
                                            <div className={styles.home_mountain}>
                                                <h4>BBQ at hidden waterfall</h4>
                                                <p className={styles.sizzling}>Sizzling hot muchies out of barbecue,
                                                    in the middle of nowhere waterfall</p>
                                                <div className={styles.demo}></div>
                                            </div>
                                            <div className='row pt-1'>
                                                <div className='col-8 text-start'><Link href="/tripSectionOne">
                                                    <a className={styles.home_explore} type="button">
                                                        <span className={styles.plan_trip_btn}>Plan your Trip</span>
                                                    </a>
                                                </Link></div>
                                                <div className='col-4 text-end px-3 pb-2'><Link href="/"><a className={styles.home_right_button}><Image src={rightarrow} height="24px" width="24px" alt="right" ></Image></a></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4' >
                    <div id={styles.happeningNow_container}>
                        <div className={styles.image2}>
                            <div className={styles.card2} style={{ backgroundImage: `url(${riverside_img})` }}></div>
                            <div className='container px-3'>
                                <div className={styles.saprater}>
                                    <h4>Riverside camping at kasol </h4>
                                    <p className={styles.sizzling1}>A bad day camping is still better than a good day working</p>
                                </div>
                                <div className='row pt-1'>
                                    <div className='col-8'><Link href="/tripSectionOne">
                                        <a className={styles.home_explore} type="button">
                                            <span >Plan your Trip</span>
                                        </a>
                                    </Link></div>
                                    <div className='col-4 text-end px-2 pb-2'><Link href="/"><a className={styles.home_right_button}><Image src={rightarrow} height="24px" width="24px" alt="arrow"></Image></a></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeD