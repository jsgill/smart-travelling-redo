import React, { useEffect, useState } from 'react';
import Link from "next/link";
import styles from "../styles/TripHeader.module.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trip_details_bg } from '../public/imagesList/list';
import TripDetailsProps from '../components/TripDetailsProps';


const TripDetails = () => {
    const [destinationPlace, setDestinationPlace] = useState("")
    const [userInterest, setUserInterest] = useState([]);
    const [userDetails, setUserDetails] = useState("")
    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        setDestinationPlace(user_dest)
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        setUserInterest(user_interest)
        const tripThree = JSON.parse(localStorage.getItem('trip_three'));
        setUserDetails(tripThree)
    }, [])
    return (
        <div>
            <div className={styles.main_container} style={{ backgroundImage: `url(${trip_details_bg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.happy_travling}>
                                <div>
                                    <p className={styles.happy_travel_p1}>Happy <br /> Travelling!</p>
                                </div>
                                <p className={styles.happy_travel_p2}>We’ll get back to you in few hours!</p>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className={styles.main_back_btn11}>
                                <div id={styles.main_card_div}>
                                    <div className='container'>
                                        <div className='row gx-0 pb-4'>
                                            <div className='col-md-12'>
                                                <div className={styles.hr_line}>
                                                    <p className={styles.trip_details_p}>Trip Detail</p>
                                                </div>
                                            </div>
                                        </div>
                                        <TripDetailsProps name={userDetails.name} userName="Name" />
                                        <TripDetailsProps name={`+91 ${userDetails.mobile}`} userName="Mobile Number" />
                                        <TripDetailsProps name={destinationPlace.destination} userName="Destination" />
                                        <TripDetailsProps name={destinationPlace.guests} userName="No of Guests" />
                                        <TripDetailsProps name={userInterest.user_interest?.join(",")} userName="Interest" />
                                        <TripDetailsProps name={`₹ ${userInterest.budget}`} userName="Budget per person" />
                                        <TripDetailsProps name={`${destinationPlace.startdate}, ${destinationPlace.enddate}`} userName="Start & End Date" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' id={styles.back_to_home_row}>
                        <div>
                            <Link href="/"><button className="btn btn-light rounded-pill" id={styles.back_home_btn}><i className="fa fa-long-arrow-left"></i><span className={styles.back_btn11}>Back To Home</span></button></Link>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default TripDetails