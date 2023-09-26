import React from "react";
import classes from "./heroBanner.module.scss";

const VideoContainer = (isMobile:boolean) => {

  return(
    <>
      <div className={classes.videoContainer}>
            <video
              width="100%"
              height="100%"
              autoPlay={true}
              disablePictureInPicture
              muted
              loop
              playsInline
              title="How UpTrain works?"
              controls
            >
              <source src={isMobile ? "/backgroundVideoMobile.mp4" : "/backgroundVideo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
    </>
  )
}

export default VideoContainer;