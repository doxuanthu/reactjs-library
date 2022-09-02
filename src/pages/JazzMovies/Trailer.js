import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import className from "classnames/bind";
import styles from "./JazzMovies.module.scss";
import { moviesSelector } from "../../redux/selector";

const cx = className.bind(styles);
function Trailer() {
  const films = useSelector(moviesSelector);
  const { id } = useParams();
  const currentFilm = films.find((film) => film.id === +id);

  return (
    <div
      className={cx("trailer")}
      style={{ backgroundImage: `url(${currentFilm.thumbnailUrl})` }}
    >
      <iframe
        className={cx("trailer-video")}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${currentFilm.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/jazzmovies" className={cx("close-btn")}>
        CLOSE TRAILER
      </Link>
    </div>
  );
}

export default Trailer;
