import React, { useState, useRef, useEffect } from "react";
import className from "classnames/bind";
import moment from "moment";
import { Input, Button } from "antd";
import { v4 as uuidV4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { addTask } from "./TasksSlice";
import styles from "./Exercise1.module.scss";
import Task from "./Task";

const cx = className.bind(styles);
function Exercise1() {
  const [valueInut, setValueInput] = useState("");
  const inputRef = useRef();

  let listTask = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleAddTask = () => {
    dispatch(
      addTask({
        _id: uuidV4(),
        name: valueInut,
        completed: false,
      })
    );

    setValueInput("");
    inputRef.current.focus();
  };

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Today</h2>
      <p className={cx("date")}>{moment().format("MMMM DD, YYYY")}</p>
      <div className={cx("input-group")}>
        <Input
          ref={inputRef}
          value={valueInut}
          onChange={handleInputChange}
          className={cx("input")}
          bordered={false}
          placeholder="New Task"
          type="text"
          spellCheck={false}
          size="large"
        />
        <Button style={{ color: "green" }} type="text" onClick={handleAddTask}>
          Add
        </Button>
      </div>
      <div className={cx("list-task")}>
        {listTask &&
          listTask.length > 0 &&
          listTask.map((value, index) => <Task key={index} value={value} />)}
      </div>
    </div>
  );
}

export default Exercise1;
