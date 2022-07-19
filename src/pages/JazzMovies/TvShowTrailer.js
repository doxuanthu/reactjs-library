import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import className from "classnames/bind";
import styles from "./JazzMovies.module.scss";
import { tvShowSelector } from "../../redux/selector";

const cx = className.bind(styles);
function TvShowTrailer() {
  const tvShows = useSelector(tvShowSelector);
  const { id } = useParams();
  const currentTvShow = tvShows.find((TvShow) => TvShow.id === id);

  return (
    <div
      className={cx("trailer")}
      style={{ backgroundImage: `url(${currentTvShow.thumbnailUrl})` }}
    >
      <iframe
        className={cx("trailer-video")}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${currentTvShow.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/tv-show/" className={cx("close-btn")}>
        CLOSE TRAILER
      </Link>
    </div>
  );
}

export default TvShowTrailer;
