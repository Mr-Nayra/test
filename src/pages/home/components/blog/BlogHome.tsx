import { memo } from "react";
import { BlogHomeCarouselData } from "../../../../data/blog/BlogHomeCarouselData";
import classes from "./blogHome.module.scss";

import BlogHomeCarousel from "./BlogHomeCarousel";

const BlogHome = () => {
  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>Latest from UpTrain AI</h1>
      <BlogHomeCarousel data={BlogHomeCarouselData} />
    </div>
  );
};

export default memo(BlogHome);
