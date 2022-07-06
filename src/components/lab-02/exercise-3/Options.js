import React from "react";
import className from "classnames/bind";
import styles from "./Exercise3.module.scss";

const cx = className.bind(styles);
function Options({ countries, value, onChange }) {
  return (
    <div className={cx("options-container")}>
      <select value={value} onChange={(e) => onChange(e)}>
        {countries.map((country) => (
          <option
            key={country.key}
            value={country.key}
          >{`${country.country} - ${country.currency}`}</option>
        ))}
      </select>
    </div>
  );
}

export default Options;
