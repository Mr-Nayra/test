import React, { memo, useMemo, useState } from "react";
import classes from "./blogRoot.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomButton from "../../../components/button/CustomButton";
import { blogData } from "../../../data/blog/blogData";

const BlogCards = () => {
  const [data, setData] = useState(5);
  const carouselData = useMemo(() => {
    let newData: any[] = [];
    blogData.forEach((item, index) => {
      if (index !== 0) {
        newData.push(item);
      }
    });
    return newData;
  }, [blogData]);

  const dataSlice = carouselData.slice(0, data);

  return (
    <div className={classes.cardRoot}>
      <h2 className={classes.heading} style={{ textAlign: "center" }}>
        More Reads
      </h2>
      <div className={classes.cardRow}>
        {dataSlice.map((item: TBlogData, index) => {
          return (
            <div key={`${"_" + index}`} className={classes.cardCol}>
              <div className={classes.card}>
                <img className={classes.cardImg} src={item.cardBanner} alt="" />
                <div className={classes.textSection}>
                  <p className={classes.author}>
                    {" "}
                    {item.authorName} | {item.date}{" "}
                  </p>
                  <h3 className={classes.cardHeading}>{item.title}</h3>
                  <p className={classes.cardDescription}>
                    {item.cardDescription}
                  </p>
                  <Link
                    to={`/blog/${item.id}`}
                    target={"_blank"}
                    className={classes.cardReadMore}
                  >
                    <span> Read More</span>
                    <AiOutlineArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.cardBtnSection}>
        <CustomButton
          label="View More"
          type="secondary"
          fontSize={17}
          fontWeight={700}
          px={44}
          py={12}
          responsiveFont={12}
          onClick={() => {
            setData(data + data);
          }}
          disabled={blogData.length - 1 === dataSlice.length ? true : false}
        />
      </div>
    </div>
  );
};

export default memo(BlogCards);
