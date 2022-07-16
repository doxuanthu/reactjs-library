import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Home.module.scss";

const cx = className.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper", "d-flex")}>
      <Link className={cx("exercise")} to="/shop">
        Exercise 01
      </Link>
      <Link className={cx("exercise")} to="/travel">
        Exercise 02
      </Link>
      <Link className={cx("exercise")} to="/stopwatch">
        Exercise 03
      </Link>
    </div>
  );
}

export default Home;
