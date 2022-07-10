import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Exercise2.module.scss";

const cx = className.bind(styles);
function Todo({ name, onClickEditButton, onClickDeleteButton }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className={cx("todo")}>
      <section>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span
          style={checked ? { textDecoration: "line-through" } : {}}
          className={cx("name")}
        >
          {name}
        </span>
      </section>
      <section>
        <button
          style={checked ? { textDecoration: "line-through" } : {}}
          className={cx("edit-btn")}
          onClick={onClickEditButton}
        >
          Edit
        </button>
        <button
          style={checked ? { textDecoration: "line-through" } : {}}
          className={cx("delete-btn")}
          onClick={onClickDeleteButton}
        >
          Delete
        </button>
      </section>
    </div>
  );
}

export default Todo;
