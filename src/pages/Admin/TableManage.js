import React, { useContext } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Admin.module.scss";
import { ShopContext, actions } from "../../store";

const cx = className.bind(styles);
function TableManage({ products }) {
  const valueShopProvider = useContext(ShopContext);

  const handleDeleteProduct = (_id) => {
    valueShopProvider[1](actions.deleteProduct(_id));
  };

  const renderTooltipForEditBtn = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Edit Product
    </Tooltip>
  );

  const renderTooltipForDeleteBtn = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete Product
    </Tooltip>
  );

  return (
    <div>
      <Table bordered hover className={cx("table-container")}>
        <thead>
          <tr
            style={{
              backgroundColor: "rgb(27, 117, 173)",
              borderColor: "rgb(27, 117, 173)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <th></th>
            <th>Mã Balo</th>
            <th>Tên Balo</th>
            <th>Giá</th>
            <th>Loại</th>
            <th>Hình</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <OverlayTrigger
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltipForEditBtn}
                >
                  <button
                    className={cx("action-btn")}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FontAwesomeIcon
                      className={cx("edit-icon")}
                      icon={faPenToSquare}
                    />
                  </button>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltipForDeleteBtn}
                >
                  <button
                    className={cx("action-btn")}
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <FontAwesomeIcon
                      className={cx("remove-icon")}
                      icon={faCircleXmark}
                    />
                  </button>
                </OverlayTrigger>
              </td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.brand || product.type}</td>
              <td>
                <img src={product.thumb} alt="thumbn" className={cx("image")} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableManage;
