import React from "react";
import className from "classnames/bind";
import { Card } from "react-bootstrap";
import styles from "./Shop.module.scss";

const cx = className.bind(styles);
function Product({ data }) {
  const { name, thumb, price, discount, brand } = data;
  const formatter = new Intl.NumberFormat("vn-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className={cx("product")}>
      <Card className="border-0">
        <div className={cx("product-img")}>
          <Card.Img
            style={{ width: "70%", position: "relative", display: "block" }}
            variant="top"
            src={thumb}
          />
          {discount && <div className={cx("discount")}>{`-${discount}%`}</div>}
        </div>
        <Card.Title className={cx("heading")}>{brand}</Card.Title>
        <Card.Body className={cx("info")}>
          <div className={cx("separator")}></div>
          <Card.Title className={cx("product-name")}>{name}</Card.Title>
          <div className={cx("prices")}>
            <Card.Text
              className={cx("price", "mb-0", {
                "old-price": discount,
              })}
            >
              {formatter.format(price)}
            </Card.Text>
            {discount && (
              <Card.Text className={cx("price-discount")}>
                {formatter.format((price * (100 - discount)) / 100)}
              </Card.Text>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
