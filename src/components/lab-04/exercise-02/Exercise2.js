import React, { useState, useRef } from "react";
import className from "classnames/bind";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from "./Exercise2.module.scss";
import Todo from "./Todo";

const { confirm } = Modal;
const cx = className.bind(styles);

function Exercise2() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() =>
    localStorage.todos ? JSON.parse(localStorage.todos) : []
  );
  const [isUpdate, setIsUpdate] = useState(false);
  const inputRef = useRef();
  const indexRef = useRef();

  const handleAddTodo = () => {
    setTodos(() => {
      const instanceTodos = [...todos, todo];
      localStorage.setItem("todos", JSON.stringify(instanceTodos));
      return instanceTodos;
    });
    setTodo("");
    inputRef.current.focus();
  };

  const handleEditTodo = (i) => {
    indexRef.current = i;
    const todoUpdate = todos[i];
    setTodo(todoUpdate);
    setIsUpdate(true);
    inputRef.current.focus();
  };

  const handleUpdateTodo = () => {
    const instanceTodos = [...todos];
    instanceTodos.splice(indexRef.current, 1, todo);
    setTodos(instanceTodos);
    localStorage.setItem("todos", JSON.stringify(instanceTodos));
    setTodo("");
    setIsUpdate(false);
  };

  const handleRemoveTodo = (i) => {
    showDeleteConfirm(i);
  };

  const showDeleteConfirm = (i) => {
    confirm({
      title: "Are you sure delete this todo?",
      icon: <ExclamationCircleOutlined />,
      //   content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        const instanceTodos = [...todos];
        instanceTodos.splice(i, 1);
        setTodos(instanceTodos);
        localStorage.setItem("todos", JSON.stringify(instanceTodos));
      },

      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Todo list</h2>
      <div className={cx("main-content")}>
        {todos &&
          todos.length > 0 &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              name={todo}
              onClickEditButton={() => handleEditTodo(index)}
              onClickDeleteButton={() => handleRemoveTodo(index)}
            />
          ))}
      </div>
      <div className={cx("add-todo")}>
        <input
          ref={inputRef}
          type="text"
          placeholder="add a new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        {!isUpdate && (
          <button className={cx("add-btn")} onClick={handleAddTodo}>
            Add
          </button>
        )}
        {isUpdate && (
          <button className={cx("add-btn")} onClick={handleUpdateTodo}>
            Done
          </button>
        )}
      </div>
    </div>
  );
}

export default Exercise2;
