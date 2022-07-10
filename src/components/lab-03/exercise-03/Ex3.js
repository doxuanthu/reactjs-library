import React, { useState, useRef } from "react";
import { Row, Col, Alert } from "antd";
import className from "classnames/bind";
import styles from "./Ex3.module.scss";

const cx = className.bind(styles);

function Ex3() {
  const [result, setResult] = useState(0);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [validation, setValidation] = useState(false);
  const inputMinRef = useRef();
  const inputMaxRef = useRef();

  const randomNumber = (min, max) => {
    if (min && max) {
      if (min === max) {
        return min;
      }
      const random = Math.floor(Math.random() * (+max - +min + 1) + +min);
      if (random < min) {
        randomNumber(min, max);
        console.log("random");
      }
      return random;
    }
  };

  const handleGenerateNumber = () => {
    if (min && max) {
      if (+min > +max) {
        setMin(max);
        setMax(min);
        setResult(randomNumber(max, min));
        return;
      }
      setResult(randomNumber(min, max));
    } else {
      setValidation(true);
      min ? inputMaxRef.current.focus() : inputMinRef.current.focus();
    }
  };
  return (
    <div>
      <Row>
        <Col span={16} offset={4}>
          <div className={cx("wrapper")}>
            <div className={cx("content")}>
              <div className={cx("result")}>{result}</div>
              <div className={cx("")}>
                <div className={cx("form-group")}>
                  <label>Min</label>
                  <br></br>
                  <input
                    ref={inputMinRef}
                    type="text"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                  {!min && validation && (
                    <Alert message="data invalid" type="error" showIcon />
                  )}
                </div>
                <div className={cx("form-group")}>
                  <label>Max</label>
                  <br></br>
                  <input
                    ref={inputMaxRef}
                    type="text"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                  />
                  {!max && validation && (
                    <Alert message="data invalid" type="error" showIcon />
                  )}
                </div>
              </div>
            </div>
            <button
              className={cx("generate-btn")}
              onClick={handleGenerateNumber}
            >
              GENERATE
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Ex3;
