import React from "react";
import className from "classnames/bind";
import styles from "./Exercise2.module.scss";

const cx = className.bind(styles);
function Square({ value, onClick }) {
  return (
    <button className={cx("square")} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
