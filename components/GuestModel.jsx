import React from "react";
import styles from "../styles/TripHeader.module.css";

const GuestModel = ({
    decrementHandler,
    incrementHandler,
    inputVal,
    count,
    submitHandler,
}) => {
    return (
        <div
            className="col-md-3 text-center"
            id={styles.tripOne_inputtwo_container}
        >
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className={styles.tripOne_inputtwo_content_container}>
                        <div>
                            <button
                                onClick={decrementHandler}
                                className="btn rounded-pill"
                                id={styles.increment}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="black"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-dash-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className={styles.tripOne_content_btn} value={inputVal}>
                            {count}
                        </p>
                        <div>
                            <button
                                onClick={incrementHandler}
                                id={styles.increment}
                                className="btn rounded-pill"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    stroke="black"
                                    className="bi bi-plus-lg"
                                    viewBox="0 0 16 16"
                                    style={{ fontWeight: "bold" }}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.tripOne_inputone_btn_container}>
                    <button
                        className={styles.tripOne_inputone_btn}
                        onClick={submitHandler}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestModel;
