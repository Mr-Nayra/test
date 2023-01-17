import { memo } from "react";
import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import classes from "./blogHome.module.scss";
import BlogHomeCarousel from "./BlogHomeCarousel";

const BlogHome = () => {
  return (
    <div className={classes.root}>
      <ShadowEclipse size={192} top={-140} left={"20%"} />
      <ShadowEclipse size={237} bottom={-30} right={-20} />
      <ShadowEclipse size={237} bottom={-150} left={-20} />
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
