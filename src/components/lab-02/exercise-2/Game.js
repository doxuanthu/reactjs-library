import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Exercise2.module.scss";
import Board from "./Board";

const cx = className.bind(styles);

function Game() {
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepCurrent, setStepCurrent] = useState(0);

  const history = squares.slice(0, stepCurrent + 1);
  const current = history[history.length - 1];

  let status = `Next player: ${xIsNext ? "X" : "O"}`;
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    const history = squares.slice(0, stepCurrent + 1);
    const current = [...history[history.length - 1]];

    if (calculateWinner(current) || current[i]) {
      return;
    }
    current[i] = xIsNext ? "X" : "O";

    setSquares([...history, current]);
    setXIsNext(!xIsNext);
    setStepCurrent(history.length);
  };

  const winner = calculateWinner(current);
  if (winner) {
    status = `Winner: ${winner}`;
  }

  const jumpTo = (i) => {
    setStepCurrent(i);
    setXIsNext(i % 2 === 0);
  };

  return (
    <div className={cx("game")}>
      <div className={cx("game-board")}>
        <div className={cx("status")}>{status}</div>

        <Board squares={current} onClick={(i) => handleClick(i)} />
      </div>
      <div className={cx("game-info")}>
        <ul>
          {squares.map((step, index) => (
            <li key={index} onClick={() => jumpTo(index)}>
              <button>
                {index ? `Go to move ${index}` : "Go to game start"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
