import { memo } from "react";
import Eclipse from "../../../../components/eclipse/Eclipse";
import classes from "./blogHome.module.scss";
import BlogHomeCarousel from "./BlogHomeCarousel";

const BlogHome = () => {
  return (
    <div className={classes.root}>
      <Eclipse
        size={42}
        left={170}
        top={25}
        opacity={true}
        lightShadow={true}
      />
      <Eclipse size={71} left={40} top={60} opacity={true} lightShadow={true} />
      <Eclipse
        size={137}
        right={-50}
        top={60}
        opacity={true}
        lightShadow={true}
      />
      <Eclipse
        size={137}
        left={50}
        bottom={-60}
        opacity={true}
        lightShadow={true}
      />
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
