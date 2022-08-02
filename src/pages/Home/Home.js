import className from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Link to="/posts" className={cx("first-btn")}>
        Blogs App
      </Link>
      <Link to="/calculator" className={cx("second-btn")}>
        Calculator
      </Link>
    </div>
  );
}

export default Home;
