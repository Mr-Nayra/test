import React from "react";
import classes from "./workFlow.module.scss";

const WorkFlow = () => {
  return (
    <>
      <div className={classes.root}>
        <div style={{ width: "100%", height: "100%" }}>
          <h1 className={classes.heading}>
            How UpTrain helps improve your models in production
          </h1>
          <video
            width="100%"
            height="100%"
            autoPlay={true}
            disablePictureInPicture
            muted
            loop
            playsInline
            title="How UpTrain works?"
          >
            <source
              src="https://uptrain-website.s3.amazonaws.com/how_uptrain_works_dark.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
