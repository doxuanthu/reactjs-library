import React from "react";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const cx = className.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Link className={cx("button")} to="/jazzmovies">
        Exercise 1
      </Link>
      <Link className={cx("button", "middle")} to="/landing-page">
        Exercise 2
      </Link>
      <Link className={cx("button")} to="/ecommerce">
        Exercise 3
      </Link>
    </div>
  );
}

export default Home;
