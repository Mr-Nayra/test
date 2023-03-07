import BlogCarousel from "@/components/blog-carousel/BlogCarousel";
import { blogData } from "@/components/blog-carousel/data/blogData";
import { useRouter } from "next/router";
import React, { memo, useMemo } from "react";
import classes from "./index.module.scss";

const BlogCardCarousel = () => {
  const pathName = useRouter().pathname;
  console.log(pathName);

  const data = useMemo(() => {
    const carouselData = blogData.filter(
      (item) => item.id !== pathName.replace("/blog/", "")
    );
    return carouselData;
  }, [pathName]);

  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>More Reads</h1>
      <BlogCarousel
        data={data}
        indicators={false}
        darkTheme={true}
        eventFor="blog"
      />
    </div>
  );
};

export default memo(BlogCardCarousel);
