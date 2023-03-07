import Eclipse from "@/components/eclipse/Eclipse";
import { TestimonialsCarouselData } from "@/utils/TestimonialsCarouseldata";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { memo } from "react";
import nextArrow from "../../../../images/next-arrow.webp";
import previousArrow from "../../../../images/previous-arrow.webp";
import classes from "../testimonials.module.scss";

const TestimonialCarousel = () => {
  return (
    <div className={classes.CarouselRoot}>
      <Carousel
        withIndicators
        initialSlide={undefined}
        height={"auto"}
        slideSize="33.333333%"
        slideGap="lg"
        loop={true}
        dragFree
        align="start"
        classNames={{
          indicator: classes.indicator,
          controls: classes.controls,
          control: classes.control,
          container: classes.container,
          indicators: classes.indicators,
        }}
        nextControlIcon={<Image src={nextArrow} alt="next-arrow" width={31} />}
        previousControlIcon={
          <Image src={previousArrow} alt="previous-arrow" width={31} />
        }
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {TestimonialsCarouselData.map((item, index) => (
          <Carousel.Slide key={`${"_" + index}`}>
            <div className={classes.upperBlock}>
              <div className={classes.card}>
                <Eclipse size={28} top={20} right={"-85%"} />
                <div className={classes.cardHeadingSection}>
                  <div
                    className={classes.avatar}
                    style={{ backgroundImage: `url(${item.userProfile?.src})` }}
                  />
                  <div className={classes.userInfo}>
                    <h2 className={classes.userName}>{item.userName}</h2>
                    <p className={classes.userPosition}>{item.userPosition}</p>
                  </div>
                </div>
                <p className={classes.cardDescription}>{item.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default memo(TestimonialCarousel);
