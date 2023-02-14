import { memo } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../../data/blog/blogData";
import BlogCards from "./BlogCards";
import classes from "./blogRoot.module.scss";

const BlogRoot = () => {
  const firstData = blogData[0];
  return (
    <div className={classes.blogRoot}>
      {/* <h1 className={classes.tittle}>
        <b>UpTrain</b> Blogs
      </h1> */}
      <div className={classes.row}>
        <div className={classes.col}>
          <img src={firstData.firstPositionBanner} alt="" width={"100%"} />
        </div>
        <div className={classes.col}>
          <h1 className={classes.heading}>{firstData.title}</h1>
          <p className={classes.author}>
            {" "}
            {firstData.authorName} | {firstData.date}
          </p>
          <p>
            {firstData.longDescription}
            <Link
              to={"/blog/" + firstData.id}
              className={classes.readMore}
              target="_blank"
            >
              {" "}
              Read full blog
            </Link>
          </p>
        </div>
      </div>
      <BlogCards />
    </div>
  );
};

export default memo(BlogRoot);
