import React from 'react';
import { trip_one_calender } from "../public/imagesList/list";
import styles from "../styles/TripHeader.module.css";
import Image from "next/image";

const TripHeader = ({ img2, img3 }) => {
    return (
        <div
            className="row mb-5 justify-content-center"
            id={styles.icon_main_row}>
            <div className="col-1 p-0">
                <Image src={trip_one_calender} alt="trip_section_logo" width={80} height={80} />
            </div>
            <div className="col-3 p-0">
                <div className={styles.tripOne_line}></div>
            </div>
            <div className="col-1 p-0">
                <Image src={img2} alt="trip_section_logo" width={80} height={80} />
            </div>
            <div className="col-3 p-0">
                <div className={styles.tripOne_line}></div>
            </div>
            <div className="col-1 p-0">
                <Image src={img3} alt="trip_section_logo" width={80} height={80} />
            </div>
        </div>
    )
}

export default TripHeader
