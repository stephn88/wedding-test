import React, { useState, useRef, useEffect } from "react";
//import "./css/countdown.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Countdown = () => {
  // const [timerYears, setTimerYears] = useState("00");
  //const [timerMonths, setTimerMonths] = useState("00");
  // const [timerWeeks, setWeeksYears] = useState("00");
  const [timerDays, setTimerDays] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("June 26, 2021").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      //const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 2.25));
      //const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        // setTimerYears(years);
        // setTimerMonths(months);
        //setWeeksYears(weeks);
        setTimerDays(days);
      }
    }, 1000);
  };
  //when the component dismounts and the useEffect hook will run this code//
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="timer-icon"></span>
          <h2>Wedding Day Countdown</h2>
        </div>
        <div>
          <span>and</span>
          <section>
            <p>{timerDays}</p>
            <p>Days</p>
          </section>
          <p>days until your special day</p>
        </div>
      </section>
    </section>
  );
};

export default Countdown;
