import React, { memo, useMemo, useState } from "react";
import classes from "./blogRoot.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BlogHomeCarouselData } from "../../../data/blog/BlogHomeCarouselData";
import CustomButton from "../../../components/button/CustomButton";

const BlogCards = () => {
  const [data, setData] = useState(5);
  const blogData = useMemo(() => {
    let newData: any[] = [];
    BlogHomeCarouselData.forEach((item, index) => {
      if (index !== 0) {
        newData.push(item);
      }
    });
    return newData;
  }, [BlogHomeCarouselData]);

  const dataSlice = blogData.slice(0, data);

  return (
    <div className={classes.cardRoot}>
      <h2 className={classes.heading} style={{ textAlign: "center" }}>
        More Reads
      </h2>
      <div className={classes.cardRow}>
        {dataSlice.map((item, index) => {
          return (
            <div key={`${"_" + index}`} className={classes.cardCol}>
              <div className={classes.card}>
                <img className={classes.cardImg} src={item.cardImg} alt="" />
                <div className={classes.textSection}>
                  <p className={classes.author}> {item.author} </p>
                  <h3 className={classes.cardHeading}>{item.heading}</h3>
                  <p className={classes.cardDescription}>{item.description}</p>
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
          disabled={
            BlogHomeCarouselData.length - 1 === dataSlice.length ? true : false
          }
        />
      </div>
    </div>
  );
};

export default memo(BlogCards);
