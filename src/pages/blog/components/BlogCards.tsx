import { memo, useMemo } from "react";
import BlogHomeCarousel from "../../home/components/blog/BlogHomeCarousel";

import classes from "./blogHome.module.scss";
import { blogData } from "../../../data/blog/blogData";

interface IProps {
  blogId: string | undefined;
}

const BlogCards = (props: IProps) => {
  const { blogId } = props;
  const data = useMemo((): TBlogData[] => {
    if (!blogId) {
      return blogData;
    }
    const carouselData = blogData.filter((item) => item.id !== blogId);
    return carouselData;
  }, [blogId]);

  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>More Reads</h1>
      <BlogHomeCarousel data={data} />
    </div>
  );
};

export default memo(BlogCards);
