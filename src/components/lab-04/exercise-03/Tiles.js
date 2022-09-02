import React from "react";
import className from "classnames/bind";
import { data } from "./mockData";
import Tile from "./Tile";
import styles from "./Tiles.module.scss";

const cx = className.bind(styles);
function Tiles() {
  return (
    <div className={cx("tiles")}>
      {data.map((image) => (
        <Tile key={image.id} alt={image.name} src={image.image} />
      ))}
    </div>
  );
}

export default Tiles;
