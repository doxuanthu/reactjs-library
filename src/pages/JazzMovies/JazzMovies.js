import React from "react";
import className from "classnames/bind";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

import styles from "./JazzMovies.module.scss";
import Movie from "./Movie";
import { moviesSelector } from "../../redux/selector";

const cx = className.bind(styles);
function JazzMovies() {
  const films = useSelector(moviesSelector);

  return (
    <div className={cx("wrapper")}>
      <Row>
        {films &&
          films.length > 0 &&
          films.map((film) => (
            <Col
              key={film.id}
              gutter={{ sx: 12, sm: 12, md: 12, lg: 12 }}
              sm={12}
              lg={8}
            >
              <Movie data={film} />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default JazzMovies;
