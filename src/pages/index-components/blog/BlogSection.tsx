import BlogCarousel from "@/components/blog-carousel/BlogCarousel";
import { blogData } from "@/components/blog-carousel/data/blogData";
import { memo } from "react";
import classes from "./blogHome.module.scss";

const BlogSection = () => {
  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>Latest from UpTrain AI</h1>
      <BlogCarousel data={blogData} eventFor="home" />
    </div>
  );
};

export default memo(BlogSection);
