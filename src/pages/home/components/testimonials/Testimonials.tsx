import { memo } from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import classes from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>What Clients thinks?</h1>
      <p className={classes.description}>
        Arize provides production ML analytics and workflows to quickly catch
        model and data issues, diagnose the root cause, and continuously improve
        performance.
      </p>
      <TestimonialCarousel />
    </div>
  );
};

export default memo(Testimonials);
