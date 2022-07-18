import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import { useDispatch } from "react-redux";
import { signOut } from "../Login/loginSlice";

import styles from "./User.module.scss";

const cx = className.bind(styles);
function User() {
  const dispatch = useDispatch();
  const handleSignOutBtnClick = () => {
    dispatch(signOut());
  };
  return (
    <div className={cx("wrapper")}>
      <h1>App</h1>
      <Link
        onClick={handleSignOutBtnClick}
        className={cx("signOut")}
        to="/login"
      >
        Sign Out!
      </Link>
    </div>
  );
}

export default User;
