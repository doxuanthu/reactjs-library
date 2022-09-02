import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./StopWatch.module.scss";

const cx = className.bind(styles);
function StopWatch() {
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(45);
  const [showEditMinutes, setShowEditMinutes] = useState(false);
  const [showEditSeconds, setShowEditSeconds] = useState(false);
  const [updateMinute, setUpdateMinute] = useState("");
  const [updateSeconds, setUpdateSeconds] = useState("");

  const handleShow = () => setShowEditMinutes(true);
  const handleClose = () => setShowEditMinutes(false);

  const handleShowSeconds = () => setShowEditSeconds(true);
  const handleCloseSeconds = () => {
    setShowEditSeconds(false);
  };

  useEffect(() => {
    const timmerId = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((minute) => minute - 1);
          setSeconds(59);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timmerId);
  }, []);

  const handleUpdatedMinutes = () => {
    setMinutes(updateMinute);
    handleClose();
  };

  const handleUpdatedSeconds = () => {
    setSeconds(updateSeconds);
    handleCloseSeconds();
  };

  return (
    <div className={cx("wrapper", "d-flex")}>
      <div className={cx("minutes")} onClick={() => handleShow()}>
        {minutes}
        <p className={cx("sub-title")} onClick={(e) => e.stopPropagation()}>
          MINUTES
        </p>
      </div>
      <Modal show={showEditMinutes} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Minutes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            size="lg"
            value={updateMinute}
            onChange={(e) => setUpdateMinute(e.target.value)}
            placeholder="Enter number of minutes to update!"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdatedMinutes}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={cx("seconds")} onClick={() => handleShowSeconds()}>
        {seconds}
        <p className={cx("sub-title")} onClick={(e) => e.stopPropagation()}>
          SECONDS
        </p>
      </div>
      <Modal show={showEditSeconds} onHide={handleCloseSeconds}>
        <Modal.Header closeButton>
          <Modal.Title>Update Seconds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            size="lg"
            value={updateSeconds}
            onChange={(e) => setUpdateSeconds(e.target.value)}
            placeholder="Enter number of seconds to update!"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSeconds}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdatedSeconds}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StopWatch;
