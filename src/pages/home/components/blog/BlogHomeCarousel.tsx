import { Carousel } from "@mantine/carousel";
import React, { useRef, memo } from "react";
import { IMAGES } from "../../../../images";
import classes from "./blogHome.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import Autoplay from "embla-carousel-autoplay";

import { Link } from "react-router-dom";

interface IProps {
  data: TBlogData[];
}

const BlogHomeCarousel = (props: IProps) => {
  const { data } = props;
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className={classes.rootCarousel}>
      <Carousel
        withIndicators
        initialSlide={1}
        height={"auto"}
        slideSize="33.333333%"
        slideGap="lg"
        loop
        dragFree
        align="center"
        slidesToScroll={"auto"}
        classNames={{
          indicator: classes.indicator,
          controls: classes.controls,
          control: classes.control,
          container: classes.container,
          indicators: classes.indicators,
          slide: classes.slide,
        }}
        nextControlIcon={<img src={IMAGES.nextArrow} alt="" width={31} />}
        previousControlIcon={
          <img src={IMAGES.previousArrow} alt="" width={31} />
        }
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 50 },
        ]}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {data.map((item, index) => (
          <Carousel.Slide key={`${"_" + index}`}>
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
                  className={classes.readMore}
                >
                  <span> Read More</span>
                  <AiOutlineArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(BlogHomeCarousel);
