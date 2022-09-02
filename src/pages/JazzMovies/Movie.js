import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./JazzMovies.module.scss";

const cx = className.bind(styles);
function Movie({ data, type = "trailer" }) {
  const { subThumb, id } = data;
  return (
    <Link to={`/${type}/${id}`}>
      <img className={cx("film-image")} alt="thumb" src={subThumb} />
    </Link>
  );
}

export default Movie;
