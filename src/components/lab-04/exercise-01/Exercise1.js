import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Exercise1.module.scss";

import Temperature from "./Temperature";

const cx = className.bind(styles);
function Exercise1() {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const handleCelsiusChange = (e) => {
    setValue(e.target.value);
    setType("c");
  };

  const handleFahrenheitChange = (e) => {
    setValue(e.target.value);

    setType("f");
  };

  const handleKelvinChange = (e) => {
    setValue(e.target.value);

    setType("k");
  };

  const tryConvert = (tempe, convert) => {
    if (Number.isNaN(parseFloat(tempe))) {
      return "";
    }

    const output = convert(tempe);
    return (Math.round(output * 1000) / 1000).toString();
  };

  const celToFah = (cel) => {
    return cel * 1.8 + 32;
  };

  const celToKel = (cel) => {
    return +cel + 273.15;
  };

  const fahToCel = (fah) => {
    return (fah - 32) / 1.8;
  };

  const fahToKel = (Fah) => {
    return ((+Fah + 459.67) * 5) / 9;
  };

  const kelToCel = (kel) => {
    return kel - 273.15;
  };

  const kelToFal = (kel) => {
    return (kel * 9) / 5 - 459.67;
  };

  let fahrenheit, kelvin, celsius;
  if (type === "c") {
    fahrenheit = tryConvert(value, celToFah);
    kelvin = tryConvert(value, celToKel);
  }

  if (type === "f") {
    celsius = tryConvert(value, fahToCel);
    kelvin = tryConvert(value, fahToKel);
  }

  if (type === "k") {
    celsius = tryConvert(value, kelToCel);
    fahrenheit = tryConvert(value, kelToFal);
  }

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Temperature Converter</h1>

      <div className={cx("main-content")}>
        <Temperature
          label="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <Temperature
          label="Fahrenheit"
          onChange={handleFahrenheitChange}
          value={fahrenheit}
        />
        <Temperature
          label="Kelvin"
          value={kelvin}
          onChange={handleKelvinChange}
        />
      </div>
    </div>
  );
}

export default Exercise1;
