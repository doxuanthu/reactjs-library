import React from "react";
import className from "classnames/bind";
import styles from "./Exercise1.module.scss";

const cx = className.bind(styles);
function Temperature({ label, value, onChange }) {
  return (
    <div className={cx("temperature")}>
      <label className={cx("label")}>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Temperature;
