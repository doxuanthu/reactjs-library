import React from "react";
import className from "classnames/bind";
import Header from "../../components/Header/Header";
import styles from "./NewPostLayout.module.scss";

const cx = className.bind(styles);
function NewPostLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Header savePost />
      </header>
      <main className={cx("content")}>{children}</main>
    </div>
  );
}

export default NewPostLayout;
