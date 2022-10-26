import React from 'react';
import styles from "../styles/TripHeader.module.css"

const Input2Model = ({ amount, toggleInput2, handleAmount, handleBudgetAmount, saveBtn }) => {
    return (
        <div id={styles.budget_popup} readOnly >
            <div className="row justify-content-center">
                <p className={styles.tripTwo_cross_para} onClick={toggleInput2}>
                    <button type="button" class="btn-close" aria-label="Close"></button>
                </p>
                <div className="row justift-content-center">
                    <div className="text-center">
                        <input placeholder="Enter Amount" onChange={handleAmount}
                            className={styles.tripTwo_inputTwo_input_container_input} />
                    </div>
                </div>
                <div className="row justify-content-center position-relative gx-0">
                    <div className={styles.budget_select_section}>
                        <input className={`${amount === "5,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                            onClick={(e) => handleBudgetAmount(e)} value="5,000" readOnly id={styles.TripTwo_input_container_btn} />
                        <input className={`${amount === "10,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                            onClick={(e) => handleBudgetAmount(e)} value="10,000" readOnly id={styles.TripTwo_input_container_btn} />
                        <input className={`${amount === "15,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                            onClick={(e) => handleBudgetAmount(e)} value="15,000" readOnly id={styles.TripTwo_input_container_btn} />
                        <input className={`${amount === "20,000" ? styles.TripTwo_btn_container_btn2 : styles.TripTwo_btn_container_btn}`}
                            onClick={(e) => handleBudgetAmount(e)} value="20,000" readOnly id={styles.TripTwo_input_container_btn} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="text-center">
                        <button
                            className={styles.tripTwo_inputtwo_btn}
                            onClick={saveBtn}>Save </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Input2Model
