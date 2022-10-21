import React from "react";
import { card_icon } from "../utility/cardIcon";
import HomeBProps from "./HomeBProps";
import styles from "../styles/Home.module.css";

const HomeB = () => {
    return (
        <div className="container">
            <div className='row justify-content-center' id={styles.home_cardSection}>
                {
                    card_icon.length > 0 && card_icon.map((icon) => {
                        const { path, title, para, id } = icon
                        return (
                            <HomeBProps path={path} title={title} para={para} key={id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeB