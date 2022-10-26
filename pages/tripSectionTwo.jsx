import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/TripHeader.module.css"
import 'reactjs-popup/dist/index.css';
import { trip_two_location, trip_one_pencil, trip_one_bg } from "../public/imagesList/list";
import { tripTwoData } from "../utility/cardIcon";
import TripHeader from "../components/TripHeader";
import TripInput from "../components/TripInput";
import Input1Model from "../components/Input1Model";
import Input2Model from "../components/Input2Model";


const TripSectionTwo = () => {
    const init = {
        Camping: false, Hiking: false, Offbeat: false, "Apple Orchards": false, Biking: false, Forest: false, Historical: false,
        Romantic: false, Adventure: false, Offroading: false, Traditional: false,
        Waterfall: false
    }
    const [input1, setInput1] = useState(false);
    const [input2, setInput2] = useState(false);
    const [amount, setAmount] = useState("");
    const [inputVal, setinputVal] = useState([])
    const [text, setText] = useState(init);

    const handleClick = (val) => {
        setText({ ...text, [val]: !text[val] })

    }

    const toggleInput1 = () => {
        setInput1(!input1);
    };
    const toggleInput2 = () => {
        setInput2(!input2);
    };

    const handleAmount = (event) => {
        setAmount(event.target.value);
    };
    const handleBudgetAmount = (e) => {
        setAmount(e.target.value);
    };

    const demo = () => { };
    const saveBtn = () => {
        toggleInput2();
    };
    const handleSubmit = () => {
        toggleInput1();
        let finalData = []
        for (const key of Object.keys(text)) {
            text[key] == true && finalData.push(key)
        }
        setinputVal(finalData)
    };
    const handleSubmit_TripTwoData = () => {
        const obj = {
            user_interest: inputVal,
            budget: amount
        }
        localStorage.setItem("trip_two", JSON.stringify(obj));
    }
    return (
        <div className={styles.main_top_background} style={{ backgroundImage: `url(${trip_one_bg})` }}>
            <div className="container">
                <TripHeader img2={trip_two_location} img3={trip_one_pencil} />
                <div className="row justify-content-center py-5">
                    <div className="col-md-7">
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <TripInput inputValue={inputVal.length == 0 ? "Choose Interest" : inputVal} changeHandler={() => (null)} max="false" className={styles.input_field} clickHandler={toggleInput1} />
                                {input1 && <Input1Model toggleInput1={toggleInput1} data={tripTwoData} handleClick={handleClick} handleSubmit={handleSubmit} text={text} />}
                                <TripInput inputValue={amount.length === 0 ? "Budget Per Person" : amount} changeHandler={demo} max="false" className={styles.input_field} clickHandler={toggleInput2} />
                                {input2 && <Input2Model amount={amount} handleBudgetAmount={handleBudgetAmount} handleAmount={handleAmount} toggleInput2={toggleInput2} saveBtn={saveBtn} />}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-3 text-center">
                            <Link href="/tripSectionThree">
                                <button className={styles.save_btn} disabled={inputVal.length == 0 || amount == ""} onClick={handleSubmit_TripTwoData}>
                                    Save & Continue
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default TripSectionTwo