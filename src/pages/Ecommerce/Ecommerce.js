import React from "react";
import className from "classnames/bind";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import styles from "./Ecommerce.module.scss";
import { productsSelector } from "../../redux/selector";
import Product from "./Product";

const cx = className.bind(styles);
function Ecommerce() {
  const products = useSelector(productsSelector);
  return (
    <div className={cx("wrapper")}>
      <Row gutter={[16, 16]}>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Col key={product.id} md={12} lg={8}>
              <Product data={product} />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Ecommerce;
