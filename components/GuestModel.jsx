import React from 'react';
import styles from "../styles/TripHeader.module.css"

const GuestModel = ({ decrementHandler, incrementHandler, inputVal, count, submitHandler }) => {
    return (


        <div
            className="col-md-3 text-center"
            id={styles.tripOne_inputtwo_container}>
            <div className="row justify-content-center">
                <div className="col-md-12" >
                    <div
                        className={styles.tripOne_inputtwo_content_container}>
                        <div >
                            <button onClick={decrementHandler}
                                className="btn rounded-pill"
                                id={styles.increment}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <p className={styles.tripOne_content_btn} value={inputVal}>{count}
                        </p>
                        <div >
                            <button onClick={incrementHandler} id={styles.increment} className="btn rounded-pill">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.tripOne_inputone_btn_container} >
                    <button
                        className={styles.tripOne_inputone_btn}
                        onClick={submitHandler}>Save
                    </button>
                </div>
            </div>
        </div>


    )
}

export default GuestModel