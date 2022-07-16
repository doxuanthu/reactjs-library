import React, { useState, useContext, useEffect, useRef } from "react";
import className from "classnames/bind";
import { Col, Form, Row } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

import { ShopContext, actions } from "../../store";
import styles from "./Admin.module.scss";

const cx = className.bind(styles);
function CreateForm() {
  const [state, dispatch] = useContext(ShopContext);
  let { name, type, price, thumb } = state;

  const imageRef = useRef();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    name &&
      price &&
      thumb &&
      dispatch(
        actions.addProduct({
          id: uuidV4(),
          name,
          type: type || "balo laptop",
          price,
          thumb,
        })
      );

    state.name = "";
    state.type = "";
    state.price = "";
    imageRef.current.value = null;
  };

  useEffect(() => {
    return () => {
      thumb && URL.revokeObjectURL(thumb);
    };
  }, [thumb]);

  const handleGetThumbnailProduct = (e) => {
    const photoUrl = URL.createObjectURL(e.target.files[0]);
    dispatch(actions.setThumb(photoUrl));
  };

  return (
    <div className={cx("form-group")}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={5}>
            <Row>
              <Col xs={4}>
                <Form.Label htmlFor="name">Tên Balo</Form.Label>
              </Col>
              <Col xs={8}>
                <Form.Control
                  size="lg"
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => dispatch(actions.setName(e.target.value))}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <Row>
              <Col xs={4}>
                <Form.Label htmlFor="type">Loại Balo</Form.Label>
              </Col>
              <Col xs={8}>
                <Form.Select
                  required
                  size="lg"
                  value={type}
                  onChange={(e) => dispatch(actions.setType(e.target.value))}
                >
                  <option value="">Open this select Balo Type</option>
                  <option value="balo laptop">Balo Laptop</option>
                  <option value="balo camera">Balo Camera</option>
                  <option value="tui sach">Túi Sách</option>
                  <option value="vali">Vali</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please choose a type.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={cx("mt-3")}>
          <Col md={5}>
            <Row>
              <Col xs={4}>
                <Form.Label htmlFor="price">Giá</Form.Label>
              </Col>
              <Col xs={8}>
                <Form.Control
                  size="lg"
                  type="text"
                  id="price"
                  required
                  value={price}
                  onChange={(e) => dispatch(actions.setPrice(e.target.value))}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <Row>
              <Col xs={4}>
                <Form.Label htmlFor="thumbnail">Hình</Form.Label>
              </Col>
              <Col xs={8}>
                <Form.Control
                  ref={imageRef}
                  size="lg"
                  type="file"
                  id="thumbnail"
                  required
                  onChange={handleGetThumbnailProduct}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid thumbnail.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <button type="submit" className={cx("add-btn")}>
            Thêm mới
          </button>
        </Row>
      </Form>
    </div>
  );
}

export default CreateForm;
