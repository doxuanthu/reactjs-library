import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Tiles.module.scss";

const cx = className.bind(styles);
function Tile({ src, alt }) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e) => {
    isOpen === false ? setOpen(true) : setOpen(false);
  };

  let tileStyle = {};
  tileStyle = isOpen
    ? {
        width: "62vw",
        height: "62vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "0",
        marginTop: "-31vw",
        marginLeft: "-31vw",
        boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        transform: "none",
      }
    : {
        width: "18vw",
        height: "18vw",
      };
  return (
    <div className={cx("tile")}>
      <img src={src} alt={alt} onClick={handleClick} style={tileStyle} />
    </div>
  );
}

export default Tile;
