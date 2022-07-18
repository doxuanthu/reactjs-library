import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Home.module.scss";

const cx = className.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Link to="/todolist">
        <button>Exercise 1</button>
      </Link>
      <Link to="/login">
        <button className={cx("medium-btn")}>Exercise 2</button>
      </Link>
      <Link to="/calculator">
        <button>Exercise 3</button>
      </Link>
    </div>
  );
}

export default Home;
