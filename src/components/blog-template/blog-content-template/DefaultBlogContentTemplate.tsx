import Image, { StaticImageData } from "next/image";
import React, { memo, ReactNode } from "react";
import classes from "./index.module.scss";
import WhiteCircle from "@/components/eclipse/WhiteCircle";
import FillEclipse from "@/components/eclipse/FillEclipse";

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
      <WhiteCircle size={120} top={"0px"} right={"-60px"} />
      <WhiteCircle size={80} bottom={"0px"} right={"0px"} />
      <FillEclipse size={300} bottom={"-150px"} left={"-100px"} />
      <FillEclipse size={300} bottom={"100px"} right={"-180px"} />
      <FillEclipse size={300} top={"180px"} right={10} />

      <div className={classes.innerBlock}>
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
    </div>
  );
};

export default memo(DefaultBlogContentTemplate);
