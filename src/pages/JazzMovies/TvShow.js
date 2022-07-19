import { Col, Row } from "antd";
import React from "react";
import className from "classnames/bind";
import { useSelector } from "react-redux";

import { tvShowSelector } from "../../redux/selector";
import styles from "./JazzMovies.module.scss";
import Movie from "./Movie";

const cx = className.bind(styles);
function TvShow() {
  const tvShows = useSelector(tvShowSelector);
  return (
    <div className={cx("wrapper")}>
      <Row>
        {tvShows &&
          tvShows.length > 0 &&
          tvShows.map((tvShow) => (
            <Col
              key={tvShow.id}
              gutter={{ sx: 12, sm: 12, md: 12, lg: 12 }}
              sm={12}
              lg={8}
            >
              <Movie data={tvShow} type="tvshow" />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default TvShow;
