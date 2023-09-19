import { memo } from "react";
import classes from "./heroBanner.module.scss";
import { useDisclosure } from "@mantine/hooks";
import UseDevicesResize from "@/helpers/UseDevicesResize";
import Line from "../line/line";
import PoweredBy from "./poweredBy";
import HeroBannerText from "./heroBannerText";

//TODO - extract video as a separate component

const HeroBanner = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { width } = UseDevicesResize();
  const isMobile = width >= 1033;
  
  return (
    <>
      {width > 1033 ? (
        <div className={classes.root}>
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
              <source src={"/backgroundVideo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={classes.textOverlay}>
            <div style={{ width: "100%" }}>
              <div className={classes.row}>
                <div className={`${classes.col} ${classes.textCol}`}>
                  <HeroBannerText />
                  <PoweredBy />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.root}>
          <div style={{ width: "100%" }}>
            <div className={classes.row}>
              <div className={`${classes.col} ${classes.textCol}`}>
                <HeroBannerText />
              </div>
              <div className={classes.col}>
                <div className={classes.mobileVideoContainer}>
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
                    <source
                      src={"/backgroundVideoMobile.mp4"}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <PoweredBy />
          </div>
        </div>
      )}
      <Line />
      {/* <AcceptModal opened={opened} close={close} /> */}
    </>
  );
};

export default memo(HeroBanner);
