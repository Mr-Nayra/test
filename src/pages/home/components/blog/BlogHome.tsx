import { memo } from "react";
import { BlogHomeCarouselData } from "../data/BlogHomeCarouselData";
import classes from "./blogHome.module.scss";

import BlogHomeCarousel from "./BlogHomeCarousel";

const dataSlice = BlogHomeCarouselData.slice(0, 3);

const BlogHome = () => {
  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>Latest from UpTrain AI</h1>
      <BlogHomeCarousel data={dataSlice} />
    </div>
  );
};

export default memo(BlogHome);
