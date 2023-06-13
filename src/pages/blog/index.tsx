import { blogData } from "@/components/blog-carousel/data/blogData";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import classes from "./style/blogPageStyle.module.scss";
import BlogCards from "../../components/blog-page/BlogCards";
import { buttonEventBlog } from "@/helpers/buttonEvent";

const index: NextPage = () => {
  const firstData = blogData[0];
  return (
    <div className={classes.root}>
      <div className={classes.blogRoot}>
        <Link
          href={"/blog/" + firstData.id}
          target="_blank"
          onClick={() => {
            buttonEventBlog(firstData.title, "blog");
          }}
          className={classes.row}
        >
          <div className={classes.col}>
            <Image
              className={classes.bannerImg}
              src={firstData.firstPositionBanner}
              alt=""
            />
          </div>
          <div className={classes.col}>
            <h1 className={classes.heading}>{firstData.title}</h1>
            <p className={classes.author}>
              {" "}
              {firstData.authorName} | {firstData.date}
            </p>
            <p className={classes.longDescription}>
              {firstData.longDescription}
              <span className={classes.readMore}> Read full blog</span>
            </p>
          </div>
        </Link>
        <BlogCards />
      </div>
    </div>
  );
};

export default index;
