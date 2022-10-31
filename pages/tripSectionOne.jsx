import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/TripHeader.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  trip_one_location,
  trip_one_pencil,
  trip_one_bg,
} from "../public/imagesList/list";
import TripHeader from "../components/TripHeader";
import GuestModel from "../components/GuestModel";
import MydModalWithGrid from "../components/Model";
import Calendar from "react-calendar";
import Router from "next/router";

const TripSectionOne = () => {
  const [modalShow, setModalShow] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");
  const startDate = new Date(date[0]).toDateString();
  const endDate = new Date(date[1]).toDateString();
  const [local, setLocal] = useState("");
  const [inputVal, setInputVal] = useState([]);
  const modelRef = useRef(null);
  const calenderRef = useRef(null);

  const handleChange = (key) => {
    if (key == "reset") {
      setUserInfo([]);
    } else {
      if (userInfo.indexOf(key) == -1) {
        setUserInfo([...userInfo, key]);
      } else {
        var val = userInfo.indexOf(key);
        if (val !== -1) {
          var val11 = userInfo.splice(val, 1);
          var filter = userInfo.filter((item) => item !== val11);
          setUserInfo(filter);
        }
      }
    }
  };
  const handleClick = (objj) => {
    toggleInput1();
    let dummyInputVal = [...inputVal];
    Object.keys(objj).map((val) => {
      if (objj[val].selected == true) {
        if (dummyInputVal.indexOf(val) == -1) {
          dummyInputVal.push(objj[val].title);
        }
      } else {
        let vall = dummyInputVal.indexOf(val);
        if (vall != -1) {
          dummyInputVal = [
            ...dummyInputVal.splice(0, vall),
            ...dummyInputVal.splice(vall + 1, inputVal.length),
          ];
        }
      }
    });
    setInputVal(dummyInputVal);
    //info = "";
    //for (let i = 0; i < userInfo.length; i++) {
    //  info = info.concat(userInfo[i]);
    //  if (i < userInfo.length - 1) {
    //    info = info.concat(", ");
    //  }
    //}
    //setInputVal(userInfo);
    //setInfo(info);
    setModalShow(false);
  };
  function toggleInput1() {
    setModalShow(true);
    setInput1(!input1);
  }
  function toggleInput2() {
    setInput2(!input2);
  }
  function toggleInput3() {
    setInput3(!input3);
  }

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  function inputTwoBtn() {
    toggleInput2();
    setInputTwo(count);
  }
  function inputThreeBtn() {
    toggleInput3();
    setInputThree(date);
  }
  const handleSubmitInput1 = () => {
    if (inputVal.length === 0 || count === 0 || date == "") {
      toast.error("Fill all the inputs", {
        position: "top-right",
      });
    } else {
      for (let j = 0; j < userInfo.length; j++) {
        local = local.concat(userInfo[j]);
        if (j < userInfo.length - 1) {
          local = local.concat(", ");
        }
      }
      setLocal(local);
      const obj = {
        destination: local,
        guests: count,
        startdate: startDate,
        enddate: endDate,
      };
      localStorage.setItem("trip_one", JSON.stringify(obj));
      Router.push("/tripSectionTwo");
    }
  };
  useEffect(() => {
    let handler = (e) => {
      if (!modelRef.current?.contains(e.target)) {
        setInput2(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  useEffect(() => {
    let handler2 = (e) => {
      if (!calenderRef.current?.contains(e.target)) {
        setInput3(false);
      }
    };
    document.addEventListener("mousedown", handler2);
    return () => {
      document.removeEventListener("mousedown", handler2);
    };
  }, []);

  return (
    <div
      className={styles.main_top_background}
      style={{ backgroundImage: `url(${trip_one_bg})` }}
    >
      <div className="container">
        <TripHeader img2={trip_one_location} img3={trip_one_pencil} />
        <div className="row justify-content-center">
          <div className="col-sm-9 col-xl-7">
            <div onClick={toggleInput1} className={styles.input_field}>
              {inputVal.length === 0
                ? "Choose Destination"
                : inputVal.join(",")}
            </div>
            {/*hide show div for first input  */}
            <MydModalWithGrid
              show={modalShow}
              changeselected={handleChange}
              onhidee={setModalShow}
              selectedvalues={inputVal}
              onnop={handleClick}
              selectcity={userInfo.length}
            />
            <div onClick={toggleInput2} className={styles.input_field}>
              {inputTwo.length == 0 ? "No. of Guests" : inputTwo}
            </div>
            {input2 && (
              <div
                style={{
                  backgroundColor: "rgba(0.4,0.4,0.4,0.5)",
                  top: "0",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                }}
              >
                <div ref={modelRef}>
                  <GuestModel
                    decrementHandler={decrement}
                    incrementHandler={increment}
                    inputVal={inputTwo}
                    count={count}
                    submitHandler={inputTwoBtn}
                    ref={modelRef}
                  />
                </div>
              </div>
            )}
            <div
              disabled={!inputTwo}
              onClick={toggleInput3}
              className={styles.input_field}
            >
              {inputThree.length == 0
                ? "Select the Start & End Date"
                : startDate.concat(" - ") + endDate}
            </div>
            <div
              style={{
                display: input3 ? "block" : "none",
                backgroundColor: "rgba(0.4,0.4,0.4,0.5)",
                position: "absolute",
                top: "0%",
                left: "0%",
                right: "0",
                bottom: "0",
              }}
            >
              <div
                ref={calenderRef}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Calendar
                  value={date}
                  minDate={new Date()}
                  onChange={setDate}
                  selectRange={true}
                />
                <div className={styles.tripOne_inputone_btn_container1}>
                  <button
                    className={styles.tripOne_inputone_btn1}
                    onClick={inputThreeBtn}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-5 col-sm-8 col-10 text-center">
              <button className={styles.save_btn} onClick={handleSubmitInput1}>
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TripSectionOne;
