import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "antd";
import className from "classnames/bind";
import moment from "moment";
import styles from "./PostDetail.module.scss";

const cx = className.bind(styles);
function PostDetail() {
  const { id } = useParams();
  const [currPost, setCurrpost] = useState({});
  const contentRef = useRef();

  useEffect(() => {
    async function getPostCurrent() {
      const posts = await fetch("/api/posts");
      const data = await posts.json();
      const currPost = data.posts.find((post) => post.id === id);
      setCurrpost(currPost);
      contentRef.current.innerHTML = currPost.content;
    }
    getPostCurrent();
  }, [id]);

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("heading")}>{currPost?.title}</h1>
      <div className={cx("auth")}>
        <Avatar size="large">A</Avatar>
        <div className={cx("info")}>
          <h5 className={cx("name")}>{currPost?.author}</h5>
          <p className={cx("createdAt")}>
            {moment(currPost?.createdAt).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
      <section ref={contentRef} className={cx("post-content")}></section>
    </div>
  );
}

export default PostDetail;
