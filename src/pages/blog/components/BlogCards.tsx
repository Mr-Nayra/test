import { memo, useMemo } from "react";
import BlogHomeCarousel from "../../home/components/blog/BlogHomeCarousel";
import {
  BlogHomeCarouselData,
  IBlogHomeCarouselData,
} from "../../home/components/data/BlogHomeCarouselData";

import classes from "./blogHome.module.scss";

interface IProps {
  blogId: string | undefined;
}

const BlogCards = (props: IProps) => {
  const { blogId } = props;
  const data = useMemo((): IBlogHomeCarouselData[] => {
    if (!blogId) {
      return BlogHomeCarouselData;
    }

    const blogData = BlogHomeCarouselData.filter((item) => item.id !== blogId);
    return blogData;
  }, [blogId]);

  return (
    <div className={classes.root} id="blog">
      <h1 className={classes.heading}>More Reads</h1>
      <BlogHomeCarousel data={data} />
    </div>
  );
};

export default memo(BlogCards);
