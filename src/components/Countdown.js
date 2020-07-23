import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    let countdownDate = new Date();

    {
      countdownDate = selectedDate.getTime();
    }

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24)); //rounding to 1 day

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
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

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <h2>Pick your wedding date</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()} //this stops user picking dates previous to today's date
            scrollableMonthYearDropdown //allows for scrolling through months to make it easier to pick future dates along with year and month dropdowns
            showMonthDropdown
            showYearDropdown
          />
          <h2>Wedding Day Countdown</h2>
        </div>
        <div className="c">
          <h3>{timerDays}</h3>
          <h3>Days</h3>
          <p>until your special day</p>
        </div>
      </section>
    </section>
  );
};

export default Countdown;
