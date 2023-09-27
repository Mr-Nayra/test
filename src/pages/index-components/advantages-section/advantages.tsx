import React from "react";
import classes from "./advantages.module.scss";
import { advantagesData } from "@/utils/advantagesData";
import Image from "next/image";
import UseDevicesResize from "@/helpers/UseDevicesResize";
import Line from "../line/line";

const Advantages = () => {
  const { width } = UseDevicesResize();

  return(
    <>
      <div className={classes.root}>
        <div style={{width: "100%"}}>
          <h1 className={classes.sectionHeading}>Experience the Benefits</h1>
          <p className={classes.sectionDescription}>See how LLM developers leverage UpTrain to iterate faster and stay ahead of competitors</p>

          <div className={classes.col}>
            {width > 768 ?
            advantagesData.map((advantage, index) => (
              (index+1)%2 == 1 ? 
                <div className={classes.row} key={index}>
                  <div className={classes.text}>
                    <div className={classes.advantageNumber}>{`0${index+1}`}</div>
                    <div className={classes.heading}>{advantage.heading}</div>
                    <div className={classes.description}>{advantage.description}</div>
                  </div>
                  <div className={classes.imageContainer}>
                    <Image src={advantage.image} alt={advantage.alt} className={classes.image} />
                  </div>
                </div> 
              : <div className={classes.row} key={index}>
                  <div className={classes.imageContainer}>
                    <Image src={advantage.image} alt={advantage.alt} className={classes.image} />
                  </div>
                  <div className={classes.text}>
                    <div>{`0${index+1}`}</div>
                    <div className={classes.advantageNumber}>{`0${index+1}`}</div>
                    <div className={classes.heading}>{advantage.heading}</div>
                    <div className={classes.description}>{advantage.description}</div>
                  </div>
                </div>
            )) : 
            advantagesData.map((advantage, index) => (
              <div className={classes.row} key={index}>
                  <div className={classes.text}>
                    <div className={classes.advantageNumber}>{`0${index+1}`}</div>
                    <div className={classes.heading}>{advantage.heading}</div>
                    <div className={classes.description}>{advantage.description}</div>
                  </div>
                  <div className={classes.imageContainer}>
                    <Image src={advantage.image} alt={advantage.alt} className={classes.image} />
                  </div>
                </div> 
            ))}
          </div>
        </div>
      </div>
      <Line />
    </>
  )

}

export default Advantages;