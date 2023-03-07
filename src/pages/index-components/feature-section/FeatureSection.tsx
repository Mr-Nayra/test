import Eclipse from "@/components/eclipse/Eclipse";
import { useState } from "react";
import CircleImg from "./components/CircleImg";
import classes from "./FeatureSection.module.scss";
import grow_graph from "./images/grow_graph.webp";
import trade_graph from "./images/trad_graph.webp";
import search_graph from "./images/search_graph.webp";
import highlight_graph from "./images/highlight_graph.webp";
import upload_icon from "./images/upload_icon.webp";
import Image from "next/image";
import FeatureSectionMobile from "./components/mobile-view/FeatureSectionMobile";
import UseDevicesResize from "@/helpers/UseDevicesResize";
import { featureData } from "@/utils/featuresData";
import { buttonEvent } from "@/helpers/buttonEvent";

const FeatureSection = () => {
  const [active, setActive] = useState(1);
  const { width } = UseDevicesResize();

  return (
    <div className={`${classes.root} feature-section`}>
      {width >= 790 ? (
        <div className={classes.row}>
          <div className={` ${classes.leftImg}`}>
            <div className={classes.contentLeft}>
              <div className={classes.circle}>
                <CircleImg
                  size={50}
                  top={"-48%"}
                  right={"32%"}
                  lightShadow={true}
                  opacity={active === 1 ? false : true}
                  onClick={() => {
                    setActive(1);
                    buttonEvent("Model Performance button");
                  }}
                  textPosition={true}
                  topPositionHeadingSection={"-48%"}
                  rightPositionHeadingSection={"-138%"}
                  topText="Model"
                  bottomText={"Performance"}
                  featureIcon={grow_graph}
                />
                <CircleImg
                  size={50}
                  top={"-21%"}
                  right={"-50%"}
                  lightShadow={true}
                  opacity={active === 2 ? false : true}
                  onClick={() => {
                    setActive(2);
                    buttonEvent("Data Drift button");
                  }}
                  topText={"Data "}
                  bottomText={"Drift"}
                  featureIcon={trade_graph}
                />
                <CircleImg
                  size={50}
                  top={"34%"}
                  right={"-96%"}
                  lightShadow={true}
                  opacity={active === 3 ? false : true}
                  onClick={() => {
                    setActive(3);
                    buttonEvent("Edge Case Signals");
                  }}
                  topText={"Edge-case"}
                  bottomText={"Signals"}
                  featureIcon={search_graph}
                />
                <CircleImg
                  size={50}
                  bottom={"-14%"}
                  right={"-86%"}
                  lightShadow={true}
                  opacity={active === 4 ? false : true}
                  onClick={() => {
                    setActive(4);
                    buttonEvent("Automated Refinement");
                  }}
                  topText={"Automated"}
                  bottomText={"Refinement"}
                  featureIcon={highlight_graph}
                />
                <CircleImg
                  size={50}
                  bottom={"-49%"}
                  right={"30%"}
                  lightShadow={true}
                  opacity={active === 5 ? false : true}
                  onClick={() => {
                    setActive(5);
                    buttonEvent("Seamless Integration");
                  }}
                  textPosition={true}
                  rightPositionHeadingSection={"-118%"}
                  bottomPositionHeadingSection={"-26%"}
                  topText={"Seamless"}
                  bottomText={"Integration"}
                  featureIcon={upload_icon}
                />

                <Eclipse
                  size={"8.5558%"}
                  top={"-5%"}
                  right={"-45%"}
                  lightShadow={true}
                  opacity={active === 1 ? false : true}
                  backgroundImageDark={active === 1 ? true : false}
                  darkTheme={false}
                />

                <Eclipse
                  size={"8.5558%"}
                  top={"11%"}
                  right={"-83%"}
                  lightShadow={true}
                  opacity={active === 2 ? false : true}
                  backgroundImageDark={active === 2 ? true : false}
                  darkTheme={false}
                />
                <Eclipse
                  size={"8.5558%"}
                  bottom={"-45%"}
                  right={"-96%"}
                  lightShadow={true}
                  opacity={active === 3 ? false : true}
                  backgroundImageDark={active === 3 ? true : false}
                  darkTheme={false}
                />
                <Eclipse
                  size={"8.5558%"}
                  top={0}
                  right={"-86%"}
                  bottom={"-77%"}
                  lightShadow={true}
                  opacity={active === 4 ? false : true}
                  backgroundImageDark={active === 4 ? true : false}
                  darkTheme={false}
                />
                <Eclipse
                  size={"8.5558%"}
                  bottom={"-96.5%"}
                  right={"-45%"}
                  lightShadow={true}
                  opacity={active === 5 ? false : true}
                  backgroundImageDark={active === 5 ? true : false}
                  darkTheme={false}
                />
                <div className={classes.outerCircle}>
                  <div className={classes.innerCircle}>
                    <h2 className={classes.circleText}>
                      UpTrain <br /> Features
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={` ${classes.rightSideCol}`}>
            <div className={classes.content}>
              {featureData.map((item, index) => {
                if (active === index + 1) {
                  return (
                    <div key={item.heading}>
                      <h1 className={classes.heading}>{item.heading}</h1>
                      <p className={classes.description}>{item.description}</p>
                      <div className={classes.whiteBox}>
                        <div className={classes.blackBox}>
                          <Image
                            src={item.featureImg}
                            alt={item.altText}
                            title={item.titleText}
                            style={{ height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        <FeatureSectionMobile />
      )}
    </div>
  );
};

export default FeatureSection;
