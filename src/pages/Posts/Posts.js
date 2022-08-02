import React, { useEffect, useState } from "react";
import className from "classnames/bind";

import styles from "./Posts.module.scss";
import Post from "../../components/Post/Post";

const cx = className.bind(styles);

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const posts = await fetch("/api/posts");
      const data = await posts.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <div className={cx("wrapper")}>
        <h1 className={cx("heading")}>Bài viết nổi bật</h1>
        <p className={cx("sub-heading")}>
          Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online
          và các kỹ thuật lập trình web.
        </p>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} data={post} />)}
      </div>
    </div>
  );
}

export default Home;
