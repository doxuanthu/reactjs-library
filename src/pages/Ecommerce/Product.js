import { Card, Typography } from "antd";
import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import styles from "./Ecommerce.module.scss";

const cx = className.bind(styles);
function Product({ data }) {
  const { name, thumb, price } = data;

  const [quantity, setQuantity] = useState(1);
  const [showQuantityBox, setShowQuantityBox] = useState(false);

  useEffect(() => {}, []);
  const priceConvert = price.toLocaleString("us-US", {
    style: "currency",
    currency: "USD",
  });

  const handleAddBtnClick = () => {
    setQuantity(1);
    setShowQuantityBox(true);
  };

  const handleMinusBtnClick = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        setShowQuantityBox(false);
      }
      return prev - 1;
    });
  };

  const handleIncreaseBtnClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <Card hoverable cover={<img alt="product" src={thumb} />}>
      <Typography style={{ textAlign: "center", fontWeight: "bold" }} level={3}>
        {name}
      </Typography>
      <div className={cx("info")}>
        <span className={cx("price")}>{priceConvert}</span>
        <div className={cx("add-product")}>
          {showQuantityBox ? (
            <div className={cx("quantity")}>
              <p onClick={handleMinusBtnClick} className={cx("minus")}>
                &#8722;
              </p>
              <p className={cx("current-quantity")}>{quantity}</p>
              <p onClick={handleIncreaseBtnClick} className={cx("increase")}>
                &#43;
              </p>
            </div>
          ) : (
            <button onClick={handleAddBtnClick} className={cx("add-btn")}>
              ADD
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default Product;
