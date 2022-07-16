import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import className from "classnames/bind";
import styles from "./HotelInfo.module.scss";
import hotels from "./fakeData";

const cx = className.bind(styles);
function HotelInfo() {
  return (
    <Container className={cx("mt-4", "wrapper")}>
      <h1 className={cx("title")}>
        SEARCH FOR A GREAT HOTEL IN THE MOST POPULAR CITIES
      </h1>
      <Row>
        {hotels.map((hotel) => (
          <Col key={hotel.id} md={6} lg={4}>
            <div className={cx("hotel")}>
              <img src={hotel.image} alt="hotel" className={cx("hotel-img")} />
              <div className={cx("info")}>
                <p className={cx("city")}>{hotel.city.toUpperCase()}</p>
                <p className={cx("price")}>
                  Hotels <span>from + {hotel.price} &#8364;</span>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HotelInfo;
