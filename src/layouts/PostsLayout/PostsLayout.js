import React from "react";
import className from "classnames/bind";
import Header from "../../components/Header/Header";
import styles from "./PostsLayout.module.scss";

const cx = className.bind(styles);
function PostsLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Header noBack />
      </header>
      <main className={cx("content")}>{children}</main>
    </div>
  );
}

export default PostsLayout;
