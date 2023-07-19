import { memo } from "react";
import TestimonialCarousel from "./components/TestimonialCarousel";
import classes from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={classes.comingSoon}>
      More details soon!
    </div>
    // <div className={classes.root}>
    //   <h1 className={classes.heading}> What people think about UpTrain</h1>
    //   <TestimonialCarousel />
    // </div>
  );
};

export default memo(Testimonials);
