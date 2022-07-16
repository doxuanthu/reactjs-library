import React, { useContext } from "react";
import className from "classnames/bind";
import { Row } from "react-bootstrap";

import styles from "./Admin.module.scss";
import CreateForm from "./CreateForm";
import TableManage from "./TableManage";
import { ShopContext } from "../../store";

const cx = className.bind(styles);
function Admin() {
  const [state] = useContext(ShopContext);
  const { products } = state;

  return (
    <div className={cx("wrapper")}>
      <Row>
        <h2 className={cx("my-4")}>Quản lý thông tin Balo</h2>
      </Row>
      <Row>
        <CreateForm />
      </Row>
      <Row>
        <h2 className={cx("my-5")}>Danh sách Balo</h2>
      </Row>
      <Row>
        <TableManage products={products} />
      </Row>
    </div>
  );
}

export default Admin;
