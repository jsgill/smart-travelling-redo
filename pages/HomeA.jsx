import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { plan_trip_img } from "../public/imagesList/list"

const HomeA = () => {
    return (
        <>
            <div className={styles.home_PlanTrip} style={{ backgroundImage: `url(${plan_trip_img})` }}>
                <div className={styles.home_bestTrip}>
                    <h1>YOUR BEST TRIP,<br /> UNIQUE TO YOUR NEEDS, JUST FEW CLICKS AWAY</h1>
                </div>
            </div>
            <div className={styles.home_planButton}>
                <Link href="/tripOne">
                    <a className="btn" id={styles.home_planYourTrip} type="button">
                        <span>Plan your Trip</span>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default HomeA