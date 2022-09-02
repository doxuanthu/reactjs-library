import { Button, Input } from "antd";
import { Link, useLocation } from "react-router-dom";
import { LeftOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import className from "classnames/bind";
import { useApp } from "../../hooks";

import styles from "./header.module.scss";

const cx = className.bind(styles);

function Header({ savePost, noBtn }) {
  const { disabledSaveBtn, handleSubmitPost } = useApp();
  const location = useLocation();
  let path = "/posts";

  if (location.pathname === "/posts") {
    path = "/";
  }

  return (
    <header className={cx("wrapper")}>
      <Link to={path}>
        <Button className={cx("btn")} icon={<LeftOutlined />}>
          Quay lai
        </Button>
      </Link>
      <div>
        <Input
          className={cx("input-search")}
          prefix={<SearchOutlined />}
          placeholder="Tim kiem bai viet..."
          allowClear={true}
        />
      </div>

      {savePost ? (
        <Button
          disabled={disabledSaveBtn}
          className={cx("save-btn")}
          onClick={handleSubmitPost}
        >
          Xuất Bản
        </Button>
      ) : noBtn ? (
        <Button></Button>
      ) : (
        <Link to="/new-post" className={cx("add-btn")}>
          <span>
            <PlusOutlined />
          </span>
        </Link>
      )}
    </header>
  );
}

export default Header;
