import { Carousel } from "@mantine/carousel";
import { useRef, memo } from "react";
import Eclipse from "../../../../components/eclipse/Eclipse";
import { IMAGES } from "../../../../images";
import classes from "./testimonialCarousel.module.scss";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialsCarouselData } from "../data/TestimonialsCarouseldata";

const TestimonialCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <div className={classes.root}>
      <Carousel
        withIndicators
        height={"auto"}
        slideSize="33.333333%"
        slideGap="lg"
        loop
        dragFree
        align="start"
        // slidesToScroll={3}
        classNames={{
          indicator: classes.indicator,
          controls: classes.controls,
          control: classes.control,
          container: classes.container,
          indicators: classes.indicators,
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
        {TestimonialsCarouselData.map((item, index) => (
          <Carousel.Slide key={index}>
            <div className={classes.upperBlock}>
              <div className={classes.card}>
                <Eclipse size={17} top={20} right={20} />
                <div className={classes.cardHeadingSection}>
                  <div className={classes.avatar}></div>
                  <div className={classes.userInfo}>
                    <h2 className={classes.userName}>{item.userName}</h2>
                    <p className={classes.userPosition}>{item.userPosition}</p>
                  </div>
                </div>
                <p className={classes.description}>{item.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(TestimonialCarousel);
