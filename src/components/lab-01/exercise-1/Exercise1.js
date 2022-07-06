import React from "react";
import className from "classnames/bind";
import Styles from "./Exercise1.module.scss";

const cx = className.bind(Styles);
function Exercise1() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-56.jpg"
        alt="avatar"
      />
      <div className={cx("profile")}>
        <ul className={cx("info-list")}>
          <li className={cx("info-item")}>
            <strong>Full Name: </strong> Nguyen Van A
          </li>
          <li className={cx("info-item")}>
            <strong>Male: </strong> Nam
          </li>
          <li className={cx("info-item")}>
            <strong>Address: </strong> TP. Ho Chi Minh
          </li>
          <li className={cx("info-item")}>
            <strong>Phone: </strong> 0123 456 789
          </li>
          <li className={cx("info-item")}>
            <strong>Email: </strong> nguyen@gmail.com
          </li>
          <li className={cx("info-item")}>
            <strong>Facebook: </strong>/Zalo: nguyenvana
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Exercise1;
