import React from 'react';
import styles from "../styles/TripHeader.module.css"
import Image from "next/image";

const Input1Model = ({ toggleInput1, data, handleClick, handleSubmit, text }) => {
  return (
    <div id={styles.intrest_popup}>
      <div className="row justify-content-center">
        <p className={styles.tripTwo_content}>Choose 3 or more</p>
        <p className={styles.tripTwo_cross_para} onClick={toggleInput1}>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </p>

        {
          data.map((val, index) => {
            const { tripName, tripLoc } = val
            return (

              <div
                className="col-md-4 col-lg-4 mb-3 col-sm-4 col-xl-3 col-4 pl-0 " key={index} id={styles.col_mini_6}>
                <div className={styles.model} style={{ backgroundColor: text[tripName] == true && "#00754a", margin: "0 auto", color: text[tripName] == true && "#fff" }} onClick={() => handleClick(tripName)}>

                  <Image src={tripLoc} height={40} width={40} alt="camping" />

                  <p className={styles.image_para_content}>{tripName}</p>
                </div>
              </div>

            )
          })
        }
      </div>
      <div className={styles.tripone_inputtwo_btn_container3}>
        <button
          className={styles.tripTwo_inputtwo_btn}
          onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>

  )
}

export default Input1Model
