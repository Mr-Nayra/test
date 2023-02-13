import { memo } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../../images";
import BlogCards from "./BlogCards";
import classes from "./blogRoot.module.scss";

const BlogRoot = () => {
  return (
    <div className={classes.blogRoot}>
      {/* <h1 className={classes.tittle}>
        <b>UpTrain</b> Blogs
      </h1> */}
      <div className={classes.row}>
        <div className={classes.col}>
          <img src={IMAGES.biasRoundedBanner} alt="" width={"100%"} />
        </div>
        <div className={classes.col}>
          <h1 className={classes.heading}>Bias in Recommender Systems</h1>
          <p className={classes.author}> Vipul Gupta | 21.01.2023 </p>
          <p>
            Modern-day web systems rely on user feedback (such as click activity
            or ratings) to build ML models to personalize recommendations. Such
            recommender systems form the core of several popular applications
            that recommend short videos (Instagram, TikTok, YouTube), timeline
            feeds (Twitter, Facebook), the next prod....{" "}
            <Link
              to={"/blog/bias-in-recommendation-systems"}
              className={classes.readMore}
              target="_blank"
            >
              {" "}
              Read full blog
            </Link>
          </p>
        </div>
      </div>
      <BlogCards />
    </div>
  );
};

export default memo(BlogRoot);
