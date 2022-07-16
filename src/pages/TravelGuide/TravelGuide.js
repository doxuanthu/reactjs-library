import React from "react";
import className from "classnames/bind";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./TravelGuide.module.scss";

const cx = className.bind(styles);

function TravelGuide() {
  return (
    <Container fluid>
      <div className={cx("wrapper", "d-flex")}>
        <h2 className={cx("title")}>World Travel Guide</h2>
        <div className={cx("search")}>
          <input type="text" placeholder="Where would you like to go ?" />
          <FontAwesomeIcon
            className={cx("search-icon")}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </Container>
  );
}

export default TravelGuide;
