import React, { useState, useEffect } from "react";
import className from "classnames/bind";
import CountUp from "react-countup";
// import currency from "currency.js";
import styles from "./Exercise3.module.scss";
import { ConvertIcon, NoteIcon, UsFlag, UkFlag, VnFlag } from "./Icon";
import Options from "./Options";

const cx = className.bind(styles);

const countries = [
  {
    country: "USD",
    currency: "US Dollar",
    flag: UsFlag,
    key: "us",
  },
  {
    country: "EUR",
    currency: "Euro",
    flag: UkFlag,
    key: "eu",
  },
  {
    country: "VND",
    currency: "Vietnam Dong",
    flag: VnFlag,
    key: "vn",
  },
];

function Ex3() {
  const [optionFrom, setOptionFrom] = useState("us");
  const [optionTo, setOptionTo] = useState("vn");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  const handleOptionChange = (e) => {
    setOptionFrom(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (optionFrom === "us") {
      if (optionTo === "vn") {
        setResult(amount * 23244884);
      } else if (optionTo === "eu") {
        setResult(amount * 0.98123331);
      } else if (optionTo === "us") {
        setResult(amount);
      }
    } else if (optionFrom === "vn") {
      if (optionTo === "vn") {
        setResult(amount);
      } else if (optionTo === "eu") {
        setResult(amount * 0.000042039927);
      } else if (optionTo === "us") {
        setResult(amount * 0.000042854506);
      }
    } else if (optionFrom === "eu") {
      if (optionTo === "vn") {
        setResult(amount * 23, 694.995);
      } else if (optionTo === "eu") {
        setResult(amount);
      } else if (optionTo === "us") {
        setResult(amount * 1.0181395);
      }
    }
  }, [amount, optionFrom, optionTo]);
  //   const USD = (value) => currency(value);
  //   const EURO = (value) =>
  //     currency(value, { symbol: "€", decimal: ",", separator: "." });
  //   const VND = (value) =>
  //     currency(value, { symbol: "₫", decimal: ",", separator: "." });

  return (
    <div className={cx("wrapper")}>
      <form className={cx("form")}>
        <div className={cx("form-group")}>
          <label htmlFor="quantity">Amount</label>
          <br></br>
          <input
            id="quantity"
            name="quantity"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className={cx("form-group")}>
          <label htmlFor="from">From</label>
          <br></br>
          <Options
            countries={countries}
            value={optionFrom}
            onChange={(e) => handleOptionChange(e)}
          />
        </div>

        <div className={cx("cvt-btn")}>
          <button>
            <ConvertIcon />
          </button>
        </div>

        <div className={cx("form-group")}>
          <label htmlFor="quantity">To</label>
          <br></br>
          <Options
            countries={countries}
            value={optionTo}
            onChange={(e) => setOptionTo(e.target.value)}
          />
        </div>
      </form>

      <div className={cx("result")}>
        <p className={cx("amount-from")}>
          {amount}{" "}
          {optionFrom === "us"
            ? "US-Dollar"
            : optionFrom === "eu"
            ? "Euro"
            : "Vietnam Dong"}{" "}
          ={" "}
        </p>
        <p>
          <CountUp
            start={0}
            end={result}
            separator=","
            decimals={3}
            duration={0.1}
          />{" "}
          {optionTo === "us"
            ? "US Dollar"
            : optionTo === "eu"
            ? "Euros"
            : "Vietnam Dong"}
        </p>
      </div>

      <div className={cx("covert")}>
        <div className={cx("note-section")}>
          <button className={cx("note-icon")}>
            <NoteIcon />
          </button>
          <span className={cx("note-content")}>
            We use the mid-market rate for our Converter. This is for
            informational purposes only. You won’t receive this rate when
            sending money.
          </span>
        </div>
        {/* <button className={cx("convert-btn")} onClick={handleConvert}>
          Convert
        </button> */}
      </div>
    </div>
  );
}

export default Ex3;
