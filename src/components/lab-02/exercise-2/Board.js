import React from "react";
import Square from "./Square";
import className from "classnames/bind";
import styles from "./Exercise2.module.scss";

const cx = className.bind(styles);

function Board({ squares, onClick }) {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div>
      <div className={cx("board-row")}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={cx("board-row")}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={cx("board-row")}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
