import React from "react";
import { useDispatch } from "react-redux";
import className from "classnames/bind";
import styles from "./Exercise1.module.scss";
import { taskStatus } from "./TasksSlice";

const cx = className.bind(styles);

function Task({ value }) {
  const dispatch = useDispatch();
  const { completed, name, _id } = value;

  const handleCheckBoxChange = () => {
    dispatch(taskStatus(_id));
  };
  return (
    <div className={cx("task")}>
      <p
        style={completed ? { textDecoration: "line-through" } : {}}
        className={cx("task-name")}
      >
        {name}
      </p>
      <label className="container">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckBoxChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Task;
