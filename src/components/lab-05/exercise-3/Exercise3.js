import React, { useState, useEffect, useRef } from "react";
import "./exercise3.scss";
import { Container } from "react-bootstrap";

function Exercise3() {
  const [days, setDays] = useState(24);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(56);
  const [seconds, setSeconds] = useState(46);

  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => {
        countDown(prev);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  const countDown = (prev) => {
    if (prev === 0) {
      setMinutes((prevMinute) => {
        if (prevMinute === 0) {
          setHours((prevHour) => {
            if (prevHour === 0) {
              setDays((prevDay) => {
                return prevDay - 1;
              });
              setHours(23);
            }
            return prevHour - 1;
          });
          setMinutes(59);
        }
        return prevMinute - 1;
      });
      setSeconds(59);
    }
  };

  if (minutes === 0 && seconds === 0 && hours === 0 && days === 0) {
    clearInterval(timerId.current);
  }
  return (
    <Container className="stopwatch">
      <div className="overlay">
        <h1 className="display-2">We're coming soon</h1>
        <p>We are working vary hard on the new version of our site</p>
        <p>It will bring a lot of new features.Stay tuned!</p>
        <div className="display d-flex justify-content-center">
          <div className="days">
            {days} <p>days</p>
          </div>
          <div className="hour">
            {hours} <p>hour</p>
          </div>
          <div className="minutes">
            {minutes} <p>minutes</p>
          </div>
          <div className="seconds">
            {seconds} <p>seconds</p>
          </div>
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + "image/lab5_img.jpg"} alt="" />
    </Container>
  );
}

export default Exercise3;
