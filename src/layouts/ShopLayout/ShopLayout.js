import React from "react";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ShopLayout.module.scss";

const cx = className.bind(styles);
function ShopLayout({ children }) {
  console.log(process.env.PUBLIC_URL + "/shop/image/banner-balo.jpg");
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to="/" className="p-0">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/banner-balo.jpg"}
            alt="banner"
            className={cx("banner")}
          />
        </Link>
      </div>
      <div className={cx("category")}>
        <ul className={cx("categories", "d-flex")}>
          <Link className={cx("item")} to="/shop">
            Balo Laptop
          </Link>
          <Link className={cx("item")} to="/shop">
            Balo Camera
          </Link>
          <Link className={cx("item")} to="/shop">
            Túi sách
          </Link>
          <Link className={cx("item")} to="/shop">
            Vali
          </Link>
          <Link className={cx("item")} to="/shop/admin">
            Quản lý
          </Link>
        </ul>
      </div>
      <div className={cx("main-content")}>{children}</div>
    </div>
  );
}

export default ShopLayout;
