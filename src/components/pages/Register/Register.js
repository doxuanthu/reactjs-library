import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import className from "classnames/bind";
import { Form, Input, message } from "antd";
import { v4 as uuidV4 } from "uuid";

import styles from "./Register.module.scss";
import { generateUsers } from "./registerSlice";

const cx = className.bind(styles);
function Login() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegisterBtnClick = () => {
    if (userName && email && password && confirm && password === confirm) {
      dispatch(
        generateUsers({
          _id: uuidV4(),
          email,
          userName,
          password,
        })
      );
      success();
      setUserName("");
      setEmail("");
      setPassword("");
      setConfirm("");
    } else {
      error();
    }
  };

  const success = () => {
    message.success({
      content:
        "Thank you! Your account has been successfully registered. Please login to use!",
      style: {
        marginTop: "25vh",
      },
    });
  };

  const error = () => {
    message.error({
      content: "Please fill out all fields!",
      style: {
        marginTop: "25vh",
      },
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Register</h1>
      <Form layout="vertical">
        <Form.Item
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          name="user-name"
          style={{ fontWeight: "700" }}
          label="User Name:"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Enter a user name ..." />
        </Form.Item>
        <Form.Item
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          style={{ fontWeight: "700" }}
          label="Email:"
        >
          <Input placeholder="Enter an email ..." />
        </Form.Item>
        <Form.Item
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
          style={{ fontWeight: "700" }}
          label="Password"
        >
          <Input.Password placeholder="Enter a password ..." />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          style={{ fontWeight: "700" }}
          label="Confirm Password"
        >
          <Input.Password
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm password ..."
          />
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            onClick={handleRegisterBtnClick}
            className={cx("login-btn")}
          >
            Register
          </button>
        </Form.Item>
      </Form>
      <p className={cx("sub-title")}>
        Already have an account? click <Link to="/login">here</Link>
      </p>
    </div>
  );
}

export default Login;
