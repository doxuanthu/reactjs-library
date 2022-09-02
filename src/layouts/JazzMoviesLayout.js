import React from "react";
import className from "classnames/bind";
import { Link, NavLink } from "react-router-dom";
import styles from "./JazzMovies.module.scss";
import { SearchOutlined } from "@ant-design/icons";

const cx = className.bind(styles);
function JazzMoviesLayout({ children }) {
  let activeStyle = {
    borderBottomColor: "#fff",
  };

  return (
    <div>
      <header className={cx("header")}>
        <Link to="/" className={cx("logo")}>
          jazzMovies
        </Link>
        <section className={cx("nav-bar")}>
          <NavLink
            to="/jazzmovies"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={cx("nav-item")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/tv-show/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={cx("nav-item")}
          >
            TV-SHOW
          </NavLink>
          <SearchOutlined className={cx("search-icon")} />
        </section>
      </header>
      <main className={cx("main-content")}>{children}</main>
    </div>
  );
}

export default JazzMoviesLayout;
