import React, { memo, useMemo, useState } from "react";
import classes from "./index.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomButton from "../button/CustomButton";
import { TBlogData } from "@/components/blog-carousel/data/BlogType";
import { blogData } from "@/components/blog-carousel/data/blogData";
import Link from "next/link";
import Image from "next/image";
import { buttonEventBlog } from "@/helpers/buttonEvent";

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
  }, []);

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
              <Link
                href={`/blog/${item.id}`}
                target={"_blank"}
                onClick={() => {
                  buttonEventBlog(item.title, "blog");
                }}
                className={classes.card}
              >
                <Image
                  className={classes.cardImg}
                  src={item.cardBanner}
                  alt=""
                />
                <div className={classes.textSection}>
                  <p className={classes.author}>
                    {" "}
                    {item.authorName} | {item.date}{" "}
                  </p>
                  <h3 className={classes.cardHeading}>{item.title}</h3>
                  <p className={classes.cardDescription}>
                    {item.cardDescription}
                  </p>
                  <div className={classes.cardReadMore}>
                    <span> Read More</span>
                    <AiOutlineArrowRight size={14} />
                  </div>
                </div>
              </Link>
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
