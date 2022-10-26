import React, { useEffect, useState } from 'react';
import Router from "next/router";
import Link from 'next/link';
import styles from "../styles/TripHeader.module.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";
import { trip_one_bg, trip_three_pencil, trip_two_location } from "../public/imagesList/list"
import TripInput from '../components/TripInput';
import TripHeader from '../components/TripHeader';
import { tripReq, tripTwoReq } from '../api';

const tripSectionThree = () => {
    const [name, setName] = useState("Enter Your Name (optional)");
    const [mobile, setMobile] = useState("Mobile Number");
    const [promo, setPromo] = useState("Promo Code (optional)");
    const [destinationPlace, setDestinationPlace] = useState({})
    const [userInterest, setUserInterest] = useState({});
    const [formError, setFormError] = useState("");
    const [userDetails, setUserDetails] = useState([]);
    const recaptchaRef = React.createRef();
    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        setDestinationPlace(user_dest)
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        setUserInterest(user_interest)
        const three = JSON.parse(localStorage.getItem('trip_three'));
        setUserDetails(three)
    }, []);
    const handleChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setMobile(result);
        if (result.length < 10) {
            setFormError("Please enter 10 digit");
        }
        else {
            setFormError("")
        }
    };

    const handleSubmit = () => {
        const obj = {
            name: '',
            mobile: '',
            promo: ''
        }
        obj.name = (name === "Enter Your Name (optional)" ? "-" : name)
        obj.mobile = mobile
        obj.promo = (promo === "Promo Code (optional)" ? "-" : promo)
        localStorage.setItem('trip_three', JSON.stringify(obj))
        if (!recaptchaRef.current.getValue()) {
            toast.error("Captcha required !", { position: "start" });
        }
        const userData = {
            "userInterests": userInterest.user_interest,
            "userDestination": destinationPlace.destination,
            "journeyBudget": userInterest.budget,
            "journeyStartingDate": destinationPlace.startdate,
            "journeyEndingDate": destinationPlace.enddate,
            "noOfGuests": destinationPlace.guests,
            "name": obj.name,
            "promo_code": obj.promo,
            "g-recaptcha-response": recaptchaRef.current.getValue()
        }
        const sendReq = tripReq(userData).then(res => console.log(res))

        const sendTwoReq = tripTwoReq(obj.mobile, userData)
            .then((response) => {
                toast.success("Success, Done, Let's Go", {
                    position: "top-right"
                });
                console.log("++++response ++++++", response)
                if (response) {
                    Router.push({ pathname: "/tripDetails" });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <div className={styles.main_top_background} style={{ backgroundImage: `url(${trip_one_bg})` }}>
                <div className="container">
                    <TripHeader img2={trip_two_location} img3={trip_three_pencil} />
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <TripInput name="username" inputValue={name} changeHandler={(e) => setName(e.target.value)} max="false" className={styles.input_field} />
                            <TripInput name="mobile" inputValue={mobile} changeHandler={handleChange} max="true" className={styles.input_field} id={styles.mobile_input} />
                            <span className={styles.mobile_validation_error}>{formError}</span>
                            <TripInput name="promoCode" inputValue={promo} changeHandler={(e) => setPromo(e.target.value)} max="false" className={styles.input_field} />
                            <div className={styles.ReCAPTCHA_div}>
                                <ReCAPTCHA ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_SITEKEY} style={{ transform: "scale(0.77)", transformOrigin: "0.0" }} />
                            </div>
                        </div>
                        <div className='row justify-content-center gx-0'>
                            <div className='col-md-3'>
                                <Link href="/tripDetails">
                                    <button className={styles.trip_three_submit_btn} disabled={mobile === "Mobile Number"}
                                        onClick={handleSubmit}>Submit</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default tripSectionThree