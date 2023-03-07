import Image, { StaticImageData } from "next/image";
import React, { memo, ReactNode } from "react";
import classes from "./index.module.scss";

interface IProps {
  banner: { image: StaticImageData; alt?: string; title?: string };
  title: string;
  authorName: string;
  date: string;
  children: ReactNode;
}

const DefaultBlogContentTemplate = (props: IProps) => {
  const { authorName, banner, date, title, children } = props;
  const { image, alt, title: imgTitle } = banner;
  return (
    <div className={classes.mainContainer}>
      <div>
        <Image
          className={`${classes.bannerImg}`}
          src={image}
          alt={alt || ""}
          title={imgTitle || ""}
          style={{ height: "auto" }}
        />
      </div>
      <div className={classes.mainContent}>
        <div className={classes.topSpacing} id="introduction">
          <h1 className={classes.heading}>{title}</h1>
          <h5 className={classes.publicDate}>
            {authorName} | {date}
          </h5>
        </div>
        <div className={classes.dataContainer}>{children}</div>
      </div>
    </div>
  );
};

export default memo(DefaultBlogContentTemplate);
