import { Carousel } from "@mantine/carousel";
import React, { useRef, memo } from "react";
import { IMAGES } from "../../../../images";
import classes from "./blogHome.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import Autoplay from "embla-carousel-autoplay";
import { BlogHomeCarouselData } from "../data/BlogHomeCarouselData";

const BlogHomeCarousel = () => {
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
        align="start"
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
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {BlogHomeCarouselData.map((item, index) => (
          <Carousel.Slide key={`${"_" + index}`}>
            <div className={classes.card}>
              <img src={item.cardImg} alt="" width={"100%"} />
              <div className={classes.textSection}>
                <p className={classes.author}> {item.author} </p>
                <h3 className={classes.cardHeading}>{item.heading}</h3>
                <p className={classes.cardDescription}>{item.description}</p>
                <a href="/" className={classes.readMore}>
                  <span>Read More</span>
                  <AiOutlineArrowRight size={14} />
                </a>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(BlogHomeCarousel);
