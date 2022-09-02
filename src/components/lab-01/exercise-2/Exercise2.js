import React, { useState, useRef, useEffect } from "react";
import className from "classnames/bind";
import Styles from "./Exercise2.module.scss";

const cx = className.bind(Styles);
function Exercise2() {
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const refWatch = useRef();

  useEffect(() => {
    if (second > 59) {
      setSecond(0);
      setMinute((minute) => minute + 1);
    } else if (minute > 59) {
      setMinute(0);
      setHours((hours) => hours + 1);
    } else if (hours > 23) {
      setHours(0);
    }
  }, [minute, second, hours]);

  const handlePauseWatch = () => {
    clearInterval(refWatch.current);
  };

  const handleResetWatch = () => {
    setHours(0);
    setMinute(0);
    setSecond(0);
    clearInterval(refWatch.current);
  };

  const handlePlayWatch = () => {
    refWatch.current = setInterval(() => {
      setSecond((second) => second + 1);
    }, 1000);
  };

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Hello, I am Clock</h2>
      <div className={cx("display")}>
        <span>
          {hours < 10 ? "0" : ""}
          {hours}:
        </span>
        <span>
          {minute < 10 ? "0" : ""}
          {minute}:
        </span>
        <span>
          {second < 10 ? "0" : ""}
          {second}
        </span>
      </div>
      <div className={cx("controller")}>
        <button type="button" className={cx("play")} onClick={handlePlayWatch}>
          Play
        </button>
        <button
          type="button"
          className={cx("pause")}
          onClick={handlePauseWatch}
        >
          Pause
        </button>
        <button
          type="button"
          className={cx("reset")}
          onClick={handleResetWatch}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Exercise2;
