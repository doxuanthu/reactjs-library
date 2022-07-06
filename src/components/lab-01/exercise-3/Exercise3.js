import React from "react";
import className from "classnames/bind";
import styles from "./Exercise3.module.scss";

const cx = className.bind(styles);

function Exercise3() {
  return (
    <div className={cx("wrapper")}>
      <table className={cx("table")} border="1">
        <thead>
          <tr className={cx("heading")}>
            <th></th>
            <th>Thứ 2</th>
            <th>Thứ 3</th>
            <th>Thứ 4</th>
            <th>Thứ 5</th>
            <th>Thứ 6</th>
            <th>Thứ 7</th>
            <th>Chủ nhật</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sáng</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Chiều</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tối</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Exercise3;
