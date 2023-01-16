import { memo } from "react";
import classes from "./blogHome.module.scss";
import BlogHomeCarousel from "./BlogHomeCarousel";

const BlogHome = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Blogs</h1>
      <p className={classes.description}>
        Arize provides production ML analytics and workflows to quickly catch
        model and data issues, diagnose the root cause, and continuously improve
        performance.
      </p>
      <BlogHomeCarousel />
    </div>
  );
};

export default memo(BlogHome);
