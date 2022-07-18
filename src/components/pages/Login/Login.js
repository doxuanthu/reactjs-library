import React, { useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { inputUser } from "./loginSlice";
import styles from "./Login.module.scss";

const cx = className.bind(styles);
function Login() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginBtnClick = () => {
    dispatch(
      inputUser({
        userName,
        password,
      })
    );
  };

  //   const error = () => {
  //     message.error({
  //       content: "Please fill out all fields!",
  //       style: {
  //         marginTop: "25vh",
  //       },
  //     });
  //   };

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Login</h1>
      <Form name="login" layout="vertical">
        <Form.Item style={{ fontWeight: "700" }} label="User Name:">
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter a user name ..."
          />
        </Form.Item>
        <Form.Item style={{ fontWeight: "700" }} label="Password">
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password ..."
          />
        </Form.Item>
        <Form.Item>
          <button onClick={handleLoginBtnClick} className={cx("login-btn")}>
            Login
          </button>
        </Form.Item>
      </Form>
      <p className={cx("sub-title")}>
        Don't have an account? Click <Link to="/register">here</Link>
      </p>
    </div>
  );
}

export default Login;
