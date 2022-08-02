import React from "react";
import className from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Calculator.module.scss";
import {
  pressNumber,
  pressOperator,
  pressEqual,
  pressReset,
} from "./calculatorSlice";
import { displaySelector } from "../../store/selector";

const cx = className.bind(styles);
function Calculator() {
  const dispatch = useDispatch();
  const display = useSelector(displaySelector);

  const handleEqualOperatorClick = () => {
    dispatch(pressEqual());
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("result")}>
        Lofree
        <p className={cx("display")}>{display}</p>
      </div>
      <div className={cx("cal-btn")}>GT</div>
      <div className={cx("cal-btn")}> &#60; </div>
      <div className={cx("cal-btn")}>CE</div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressReset())}>
        C
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(7))}>
        7
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(8))}>
        8
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(9))}>
        9
      </div>
      <div
        className={cx("cal-btn")}
        onClick={() => dispatch(pressOperator("/"))}
      >
        /
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(4))}>
        4
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(5))}>
        5
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(6))}>
        6
      </div>
      <div
        className={cx("cal-btn")}
        onClick={() => dispatch(pressOperator("*"))}
      >
        X
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(1))}>
        1
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(2))}>
        2
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(3))}>
        3
      </div>
      <div
        className={cx("cal-btn")}
        onClick={() => dispatch(pressOperator("-"))}
      >
        -
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber(0))}>
        0
      </div>
      <div className={cx("cal-btn")} onClick={() => dispatch(pressNumber("."))}>
        .
      </div>
      <div className={cx("cal-btn")} onClick={handleEqualOperatorClick}>
        =
      </div>
      <div
        className={cx("cal-btn")}
        onClick={() => dispatch(pressOperator("+"))}
      >
        +
      </div>
    </div>
  );
}

export default Calculator;
