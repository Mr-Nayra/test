import React, { Fragment, useMemo } from "react";
import { useParams } from "react-router";
import { blogData } from "../../data/blog/blogData";

import BlogCards from "./components/BlogCards";
import CommonBlogPage from "./components/CommonBlogPage";

const BlogPage = () => {
  const blogId = useParams().id;

  const renderBlog = useMemo(() => {
    const data = blogData.find((item) => item.id === blogId);
    if (data) return data;
    return blogData[0];
  }, [blogId]);

  return (
    <Fragment>
      <CommonBlogPage data={renderBlog} />

      <BlogCards blogId={blogId} />
    </Fragment>
  );
};

export default BlogPage;
