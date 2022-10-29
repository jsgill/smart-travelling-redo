import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import popup_img from "../public/images/trip/popup_img.png";
import { contact_bg, dhruv, nihal } from "../public/imagesList/list";
import ContactCard from "../components/ContactCard";
import SocialIcon from "../components/SocialIcon";
import ContactPopup from "../components/ContactPopup";

const Contact = () => {
    const recaptchaRef = React.createRef();
    const [open, setOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
    const onSubmit = (data) => {
        const { name, phone, message } = data
        if (!recaptchaRef.current.getValue()) {
            toast.error("Captcha required !", { position: "bottom-center" });
        }
        else {
            setOpen(true)
            axios({
                method: "POST",
                url: process.env.NEXT_PUBLIC_CONTACT_US_URL,
                data: {
                    "name": name,
                    "number": phone,
                    "message": message,
                    "g-recaptcha-response": recaptchaRef.current.getValue()
                },
                headers: { 'Content-Type': 'application/json' },
            }).then((res) => {
                console.log("data sent to formbold");
            }).catch((error) => {
                console.log("error");
            });
        }
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid" id={styles.main_contact_container}>
                <div className={styles.contact_image} style={{ backgroundImage: `url(${contact_bg})` }}>
                    <h1 className={styles.contact_tourist_care}>TOURIST CARE</h1>
                </div>
            </div>
            <div className="mb-4">
                <div className="container mb-5">
                    <h1 className={styles.contact_founding_team}>Founding Team</h1>
                    <div className="row justify-content-lg-center justify-content-md-around px-xl-5 px-md-1 px-lg-0 px-sm-5 " id={styles.contact_all_card} >
                        <ContactCard img={nihal} name="Nihal Choudhary" text="Co-Founder, Product IITK'21" link1="mailto:nihal@thesmartraveller.com" link2="https://instagram.com/nihilistic___?igshid=YmMyMTA2M2Y" link3="https://www.linkedin.com/in/nihalchoudhary" />
                        <ContactCard img={dhruv} name="Dhruv Sihag" text="Co-Founder, Operations IITK'21" link1="mailto:dhruv@thesmartraveller.com" link2="https://instagram.com/_dhruvsihag?igshid=YmMyMTA2M2Y" link3="https://www.linkedin.com/in/dhruv-sihag-99a1b91a0" />
                    </div>
                    <div className="container pt-5 mb-md-5">
                        <div className="text-center" id={styles.contact_parent_div}>
                            <p className={styles.contact_user_h1}>Contact Us</p>
                            <p className={styles.contact_user_para}>Our team is here to help you make the most of your time with us!</p>
                        </div>
                    </div>
                    <div className="row" id={styles.contact_info11} style={{ border: "0px solid red" }}>
                        <div className="col-lg-7 col-md-7" id={styles.contact_number_card11}>
                            <div className={styles.contact_number_card}>
                                <span><i className="fa fa-phone" id={styles.phone_icon33}></i></span>
                                <span className={styles.contact_number}>+91 7807021868</span>
                            </div>
                            <div className={styles.contact_number_card} id={styles.contact_main_mail}>
                                <span className={styles.contact_mail_img11}><i className="fa fa-envelope" id={styles.mail_icon33}></i></span>
                                <span className={styles.contact_gmail}>smartestraveller@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className={styles.contact_channel_text}>Our Channel</p>
                            <SocialIcon icon1="fa fa-facebook" icon2="fa fa-instagram" icon3="fa fa-linkedin" insta="https://instagram.com/thesmartraveller.in?igshid=YmMyMTA2M2Y" linkdin="https://www.linkedin.com/company/the-smart-traveller/?viewAsMember=true" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.contact_your_details}>
                        <p className={styles.contact_your_text}>Your Details:</p>
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <input type="text" placeholder="Your name" autoComplete="off" name="name" className={styles.contact_inputs11} defaultValue=""
                                    {...register("name", { required: true })} />
                                {errors.name?.type === "required" && (<small style={{ color: "red" }}>Enter your name</small>)}
                            </div>
                            <div className="col-lg-6 mb-4">
                                <input type="text" placeholder="Phone number" autoComplete="off" name="phone" maxLength={10} className={styles.contact_inputs22} defaultValue=""
                                    {...register("phone", { required: true, pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i })} />
                                {errors.phone?.type === "required" && (<small style={{ color: "red" }}>Enter your phone number</small>)}
                                {errors.phone?.type === "pattern" && (<small style={{ color: "red" }}>Only ten digit numbers are allowed</small>)}
                            </div>
                            <div className="col-lg-12">
                                <textarea type="text" placeholder="Message" autoComplete="off" name="message" className={styles.contact_message_input} defaultValue=""
                                    {...register("message", { required: true })} />
                                {errors.message?.type === "required" && (<small style={{ color: "red" }}>Enter your message</small>)}
                            </div>
                        </div>
                        <ReCAPTCHA ref={recaptchaRef} sitekey="{process.env.NEXT_PUBLIC_SITEKEY}" style={{ transform: "scale(0.77)", transformOrigin: "0.0" }} />
                        <div className="pb-5 text-center">
                            <button className={styles.contact_submit_btn} onClick={handleSubmit(onSubmit)}>Submit</button>
                        </div>
                        <ContactPopup open={open} img={popup_img} header="Thanks for contacting us! We will get in touch with you shortly." />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact