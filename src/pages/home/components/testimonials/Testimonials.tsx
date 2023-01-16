import { memo } from "react";
import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import TestimonialCarousel from "./TestimonialCarousel";
import classes from "./testimonials.module.scss";

const Testimonials = () => {
  return (
    <div className={classes.root}>
      <ShadowEclipse size={192} top={-130} left={"20%"} />
      <ShadowEclipse size={192} bottom={"10%"} right={"3%"} />
      <ShadowEclipse size={192} bottom={"-20%"} left={"-1%"} />
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
