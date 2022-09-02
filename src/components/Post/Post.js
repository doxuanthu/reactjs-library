import { useEffect, useRef } from "react";
import className from "classnames/bind";
import moment from "moment";
import styles from "./Post.module.scss";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const cx = className.bind(styles);
function Post({ data }) {
  const descRef = useRef();
  const { id, title, content, author, createdAt } = data;
  useEffect(() => {
    descRef.current.innerHTML = content;
  }, [content]);
  return (
    <div className={cx("post")}>
      <div className={cx("auth-info")}>
        <Avatar size="small">{author?.charAt(0).toUpperCase()}</Avatar>
        <span className={cx("name")}>{author}</span>
      </div>
      <div className={cx("content")}>
        <div className={cx("left")}>
          <Link to={`${id}`} className={cx("title")}>
            {title}
          </Link>
          <p ref={descRef} className={cx("description")}>
            {}
          </p>
        </div>
        {/* <div className={cx("right")}>
          <img
            src="	https://files.fullstack.edu.vn/f8-prod/blog_posts/3930/62b7ef8ce02a3.png"
            alt="desc-img"
          />
        </div> */}
      </div>
      <div className={cx("post-footer")}>
        <button className={cx("")}>React</button>
        <p className={cx("createdAt")}>
          {moment(createdAt).format("DD/MM/YYYY")}
        </p>
      </div>
    </div>
  );
}

export default Post;
