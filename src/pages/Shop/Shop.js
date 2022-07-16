import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import { mockData } from "./mockData";

function Shop() {
  return (
    <div>
      <Row className="">
        {mockData.map((data) => (
          <Col key={data.id} md={6} lg={4}>
            <Product data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Shop;
