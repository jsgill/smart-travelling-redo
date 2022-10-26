import React from 'react';
import styles from "../styles/TripHeader.module.css"
import Image from "next/image";

const Input1Model = ({ toggleInput1, data, handleClick, handleSubmit, text }) => {
  return (
    <div id={styles.intrest_popup} readOnly>
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
                className="col-md-3" id={styles.column} key={index}>
                <div className={styles.model} style={{ backgroundColor: text[tripName] == true && "#00754a", color: text[tripName] == true && "#fff" }} onClick={() => handleClick(tripName)}>
                  <p className="py-2">
                    <Image src={tripLoc} height={60} width={60} alt="camping" />
                  </p>
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
