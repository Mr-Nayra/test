import { StaticImageData } from "next/image";
import classes from "./blogTemplate.module.scss";
import React from "react";
import DefaultTableList from "./table-list/DefaultTableList";
import DefaultBlogContentTemplate from "./blog-content-template/DefaultBlogContentTemplate";
import DefaultBlogTemplateCarousel from "./blog-template-carousel/DefaultBlogTemplateCarousel";
import NewsLetter from "../news-letter/NewsLetter";

interface IProps {
  tablelist: {
    title: string;
    id: string;
    nestedList?: {
      title: string;
      id: string;
    }[];
  }[];
  banner: { image: StaticImageData; alt?: string; title?: string };
  title: string;
  authorName: string;
  date: string;
  children: React.ReactNode;
}

const BlogTemplate: React.FC<IProps> = ({
  tablelist,
  authorName,
  banner,
  children,
  date,
  title,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.tableContainer}>
          <DefaultTableList data={tablelist} />
        </div>
        <DefaultBlogContentTemplate
          title={title}
          authorName={authorName}
          date={date}
          banner={banner}
        >
          {children}
        </DefaultBlogContentTemplate>
      </div>
      <DefaultBlogTemplateCarousel />
      <NewsLetter />
    </div>
  );
};

export default BlogTemplate;
