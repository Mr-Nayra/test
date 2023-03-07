import { Carousel } from "@mantine/carousel";
import React, { useRef, memo } from "react";
import classes from "./blogCarousel.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import previousArrow from "./images/previous-arrow.webp";
import nextArrow from "./images/next-arrow.webp";
import Image from "next/image";
import { TBlogData } from "./data/BlogType";
import { buttonEventBlog } from "@/helpers/buttonEvent";

interface IProps {
  data: TBlogData[];
  indicators?: boolean;
  eventFor: "home" | "blog";
  darkTheme?: boolean;
}

const BlogCarousel = (props: IProps) => {
  const { data, indicators = true, eventFor, darkTheme = false } = props;
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className={classes.rootCarousel}>
      <Carousel
        withIndicators
        initialSlide={undefined}
        height={"auto"}
        slideSize="33.333333%"
        slideGap="lg"
        loop={true}
        dragFree
        align="start"
        slidesToScroll={indicators ? undefined : "auto"}
        classNames={{
          indicator: `${
            indicators ? classes.indicator : classes.indicatorNot
          } `,
          controls: `${indicators ? classes.controls : classes.indicatorNot}`,
          control: classes.control,
          container: classes.container,
          indicators: classes.indicators,
          slide: classes.slide,
        }}
        nextControlIcon={<Image src={nextArrow} alt="next-arrow" width={31} />}
        previousControlIcon={
          <Image src={previousArrow} alt="previous-arrow" width={31} />
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
            <Link
              href={`/blog/${item.id}`}
              target={"_blank"}
              className={`${classes.card}  ${darkTheme && classes.dark}`}
              onClick={() => {
                buttonEventBlog(item.title, eventFor);
              }}
            >
              <Image
                className={classes.cardImg}
                src={item.cardBanner}
                alt="cardBanner"
              />
              <div className={classes.textSection}>
                <p className={`${classes.author} ${darkTheme && classes.dark}`}>
                  {item.authorName} | {item.date}{" "}
                </p>
                <h3
                  className={`${classes.cardHeading} ${
                    darkTheme && classes.dark
                  } `}
                >
                  {item.title}
                </h3>
                <p
                  className={`${classes.cardDescription} ${
                    darkTheme && classes.dark
                  }`}
                >
                  {item.cardDescription}
                </p>
                <div className={classes.readMore}>
                  <span> Read More</span>
                  <AiOutlineArrowRight size={14} />
                </div>
              </div>
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(BlogCarousel);
