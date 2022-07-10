import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./Ex1.module.scss";

const cx = className.bind(styles);
function Calculator() {
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const [operator, setOperator] = useState("");
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState(0);
  const [isEqual, setIsEqual] = useState(false);

  //   Handle when user press keyboard
  //   useEffect(() => {
  //     const handleEvent = (ev) => handlePressKey(ev);

  //     document.addEventListener("keyup", handleEvent);

  //     return () => document.removeEventListener("keyup", handleEvent);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const handlePressKey = (ev) => {
  //     const numRegex = /^([0-9]|\.)*$/g;
  //     const opRegex = /[+|\-|:|*|%]/g;
  //     const eqRegex = /(=)/g;
  //     const acRegex = /(Escape)/g;
  //     const key = ev.key;

  //     const isNumber = !!numRegex.exec(key);
  //     const isOperator = !!opRegex.exec(key);
  //     const isEqual = !!eqRegex.exec(key);
  //     const isAc = !!acRegex.exec(key);

  //     if (key && isNumber) {
  //       setNumberValue(key + "");
  //     }

  //     if (key && isOperator) {
  //       setOperatorValue(key + "");
  //     }

  //     if (key && isEqual) {
  //       equalHandler();
  //     }

  //     if (key && isAc) {
  //       allClear();
  //     }
  //   };

  const hasPoint = (value) => value.indexOf(".") > -1;

  const fixNumberString = (value, finalize = false) => {
    if (
      finalize &&
      value.indexOf(".") === value.length - 1 &&
      value.length > 1
    ) {
      return `${value}.0`;
    }

    if (value.indexOf("0") === 0 && !value.indexOf("0.") === 0) {
      return value.substring(1);
    }

    if (value.indexOf(".") === 0 && value.length === 1) {
      return "0.";
    }

    if (!value) {
      return "0";
    }

    return value;
  };

  const getOverall = () => {
    return calculation;
  };

  const calculate = () => {
    const vfirstVal = fixNumberString(firstVal, true);
    const vsecondVal = fixNumberString(secondVal, true);
    let total = "0";

    switch (operator) {
      case "-":
        total = parseFloat(vfirstVal) - parseFloat(vsecondVal);
        break;
      case "x":
        total = parseFloat(vfirstVal) * parseFloat(vsecondVal);
        break;
      case ":":
        total = parseFloat(vfirstVal) / parseFloat(vsecondVal);
        break;
      case "+":
        total = parseFloat(vfirstVal) + parseFloat(vsecondVal);
        break;
      case "%":
        total = parseFloat(vfirstVal) % parseFloat(vsecondVal);
        break;
      default:
    }

    return total.toLocaleString();
  };

  const displayResult = (value) => setResult(value);

  const resetState = (state) => {
    if (state) {
      setFirstVal("");
      setSecondVal("");
      setOperator("");
      setCalculation("");
      setResult("0");
    } else {
      setFirstVal("");
      setSecondVal("");
      setOperator("");
      setCalculation("");
    }
  };

  const setNumberValue = (value) => {
    let total;

    if (value === ".") {
      if (!operator && !hasPoint(firstVal)) {
        total = fixNumberString(firstVal + value);
        setFirstVal(total);
      }

      if (!!operator && !hasPoint(secondVal)) {
        total = fixNumberString(secondVal + value);
        setSecondVal(total);
      }

      if (total) {
        displayResult(total + "");
      }

      return;
    }

    if (!operator) {
      total = fixNumberString(firstVal + value);
      setFirstVal(total);
    } else {
      total = fixNumberString(secondVal + value);
      setSecondVal(total);
    }
    displayResult(total);
  };

  useEffect(() => {
    const result = calculate();
    if (isEqual) {
      return;
    } else {
      displayResult(result);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondVal]);

  const setOperatorValue = (value) => {
    const fixedNumber = fixNumberString(firstVal, false);

    if (firstVal && !secondVal) {
      setOperator(value);
      setResult(fixedNumber);
    } else if (firstVal && operator && secondVal) {
      const total = calculate();
      setOperator(value);
      setFirstVal(total + "");
      setSecondVal("");

      displayResult(total + "");
    } else {
      setCalculation(result + operator + "");
      setOperator(value);
      setFirstVal(fixNumberString(result, false));
    }
  };

  const equalHandler = () => {
    if (firstVal && secondVal && operator) {
      let total = calculate();
      displayResult(total + "");
      resetState();
      setIsEqual(true);
    }
  };

  const allClear = () => {
    resetState(true);
  };

  //   Handle when user clicked
  const handleNumberClick = (e) => {
    setNumberValue(e.target.innerText);
    setCalculation((prev) => fixNumberString(prev + e.target.innerText));
    setIsEqual(false);
  };

  const handleRemoveClick = () => {
    allClear();
  };

  const handleEqualClick = () => {
    equalHandler();
  };

  const handleOperatorClick = (e) => {
    setOperatorValue(e.target.innerHTML);
    setCalculation((prev) => prev + e.target.innerText);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("display")}>
        <p>{getOverall().trim()}</p>
        <p>{result}</p>
      </div>
      <button onClick={handleRemoveClick}>AC</button>
      <button onClick={handleOperatorClick}>&#8723;</button>
      <button onClick={handleOperatorClick}>%</button>
      <button onClick={handleOperatorClick}>:</button>
      <button onClick={handleNumberClick}>7</button>
      <button onClick={handleNumberClick}>8</button>
      <button onClick={handleNumberClick}>9</button>
      <button onClick={handleOperatorClick}>x</button>
      <button onClick={handleNumberClick}>4</button>
      <button onClick={handleNumberClick}>5</button>
      <button onClick={handleNumberClick}>6</button>
      <button onClick={handleOperatorClick}>-</button>
      <button onClick={handleNumberClick}>1</button>
      <button onClick={handleNumberClick}>2</button>
      <button onClick={handleNumberClick}>3</button>
      <button onClick={handleOperatorClick}>+</button>
      <button onClick={handleNumberClick} className={cx("btn-0")}>
        0
      </button>
      <button onClick={handleNumberClick}>.</button>
      <button onClick={handleEqualClick}>&#61;</button>
    </div>
  );
}

export default Calculator;
