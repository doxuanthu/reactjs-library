import React from "react";
import className from "classnames/bind";
import Header from "../../components/Header/Header";
import styles from "./PostDetailLayout.module.scss";

const cx = className.bind(styles);
function PostDetailLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <Header noBtn />
      </header>
      <main className={cx("content")}>{children}</main>
    </div>
  );
}

export default PostDetailLayout;
