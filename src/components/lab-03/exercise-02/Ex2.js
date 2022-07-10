import React, { useState, useRef } from "react";
import className from "classnames/bind";
import { HourglassOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import styles from "./Ex2.module.scss";

const cx = className.bind(styles);

function Ex2() {
  const [minute, setMinute] = useState(5);
  const [second, setSecond] = useState(0);

  const timerId = useRef();

  const handleCountDown = () => {
    setSecond(59);
    setMinute(4);
    timerId.current = setInterval(() => {
      setSecond((prev) => {
        if (prev === 0) {
          setMinute((prev) => prev - 1);
          setSecond(59);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(timerId.current);
    setMinute(5);
    setSecond(0);
  };

  const info = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>Time out.!</p>
        </div>
      ),

      onOk() {},
    });
  };

  if (minute === 0 && second === 0) {
    clearInterval(timerId.current);
    info();
  }

  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("title")}>
        <HourglassOutlined /> TIMER
      </h5>
      <main className={cx("content")}>
        <div className={cx("display")}>
          <span className={cx("minute")}>
            {minute}
            <small>m</small>
          </span>
          {"  "}
          <span className={cx("second")}>
            {second < 10 && 0}
            {second}
            <small>s</small>
          </span>
        </div>
      </main>
      <footer className={cx("footer")}>
        <button className={cx("start-btn")} onClick={handleCountDown}>
          START
        </button>
        <button className={cx("reset-btn")} onClick={handleReset}>
          RESET
        </button>
      </footer>
    </div>
  );
}

export default Ex2;
