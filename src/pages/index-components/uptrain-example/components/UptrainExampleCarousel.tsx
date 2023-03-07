import Link from "next/link";
import React, { useRef } from "react";
import classes from "../uptrainExample.module.scss";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import previousArrow from "../images/preVector.png";
import nextArrow from "../images/nextVector.png";
import Image from "next/image";
import { UptrainExampleData } from "../../../../utils/UptrainExampleData";

import { BsArrowRightShort } from "react-icons/bs";

const UptrainExampleCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <>
      <div className={classes.rootCarousel}>
        <Carousel
          withIndicators
          initialSlide={undefined}
          height={"auto"}
          slideSize="25%"
          slideGap={"lg"}
          loop={true}
          dragFree={false}
          align="start"
          slidesToScroll={undefined}
          classNames={{
            indicator: `${classes.indicator} `,
            controls: `${classes.controls}`,
            control: classes.control,
            container: classes.container,
            indicators: classes.indicators,
            slide: classes.slide,
          }}
          nextControlIcon={
            <Image src={nextArrow} alt="next-arrow" width={31} />
          }
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
          {UptrainExampleData.map((item, index) => (
            <Carousel.Slide key={`${"_" + index}`}>
              <div className={classes.card}>
                <h2 className={classes.cardHeading}>{item.heading}</h2>
                <Link href="/" className={classes.readMoreBtn}>
                  Read More{" "}
                  <BsArrowRightShort className={classes.readMoreBtnIcon} />
                </Link>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default UptrainExampleCarousel;
