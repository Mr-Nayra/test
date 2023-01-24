import { memo } from "react";
import classes from "./blogHome.module.scss";
// import ShadowEclipse from "../../../../components/eclipse/ShadowEclipse";
import BlogHomeCarousel from "./BlogHomeCarousel";

const BlogHome = () => {
  return (
    <div className={classes.root} id="blog">
      {/* <ShadowEclipse size={192} top={-140} left={"20%"} />
      <ShadowEclipse size={237} bottom={-30} right={-20} />
      <ShadowEclipse size={237} bottom={-150} left={-20} /> */}
      <h1 className={classes.heading}>Latest from UpTrain AI</h1>
      <BlogHomeCarousel />
    </div>
  );
};

export default memo(BlogHome);
