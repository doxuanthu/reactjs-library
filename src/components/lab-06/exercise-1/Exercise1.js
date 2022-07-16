import React from "react";
import className from "classnames/bind";
import styles from "./Exercise1.module.scss";

const cx = className.bind(styles);
function Exercise1() {
  return <div className={cx("wrapper")}></div>;
}

export default Exercise1;
