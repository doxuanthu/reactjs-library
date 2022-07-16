import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import className from "classnames/bind";
import styles from "./Consulting.module.scss";
import tours from "./tours";

const cx = className.bind(styles);
function Consulting() {
  return (
    <Container className={cx("my-4")}>
      <Row>
        {tours.map((tour) => (
          <Col key={tour.id} md={6} lg={4}>
            <Card className={cx("tour", "text-center", "p-3")}>
              <Card.Img
                style={{ width: "100%", marginBottom: "24px" }}
                src={tour.image}
                alt={tour.location}
              ></Card.Img>
              <Card.Title className={cx("location")}>
                {tour.location.toUpperCase()}
              </Card.Title>
              <Card.Body>
                <Card.Title className={cx("country")}>
                  {tour.location}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Consulting;
