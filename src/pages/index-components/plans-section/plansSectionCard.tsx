import React from "react";
import classes from "./plansSection.module.scss";
import Image, { StaticImageData } from "next/image";
import checkIcon from "./images/check_icon.webp";
import CustomButton from "@/components/button/CustomButton";
import { buttonEvent } from "@/helpers/buttonEvent";
import Link from "next/link";

interface IPlansSectionCard {
  heading: string;
  targetUser: string;
  charges: string;
  description: Array<string>;
  buttonText: string;
}

const PlansSectionCard = (props: IPlansSectionCard) => {
  const { heading, targetUser, charges, description, buttonText } = props;

  return (
    <>
      <div className={classes.card}>
        {/* <Image
          src={backgroundImage}
          alt="background_img"
          className={classes.backgroundImage}
        /> */}
        <div className={classes.text}>
          <div className={classes.cardHeader}>
            <h2 className={classes.cardHeading}>{heading}</h2>
            <p className={classes.targetUser}>{targetUser}</p>
          </div>

          <div className={classes.chargesContainer}>
            <h1 className={classes.charges}>{charges}</h1>
          </div>

          <div className={classes.description}>
            {description?.map((item, index) => (
              <div className={classes.descriptionItem} key={`${"_" + index}`}>
                <Image
                  src={checkIcon}
                  alt="check_icon"
                  className={classes.checkIcon}
                />
                <p className={classes.descriptionText}>{item}</p>
              </div>
            ))}
          </div>

          <div className={classes.buttonSection}>
            <Link
              onClick={() => {
                buttonEvent(`${buttonText}`);
              }}
              href={
                buttonText == "Start Free Trial"
                  ? "https://demo.uptrain.ai/api/login/google/login"
                  : buttonText == "Read Docs"
                  ? "https://github.com/uptrain-ai/uptrain#get-started-"
                  : "https://calendly.com/uptrain-sourabh/uptrain-demo"
              }
              target={"_self"}
              rel="noreferrer"
            >
              <CustomButton
                label={buttonText}
                type="secondary"
                fontSize={15}
                fontWeight={500}
                responsiveFont={10}
                responsivePx={14}
                responsivePy={10}
                onClick={() => {
                  buttonEvent(`${buttonText}`);
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansSectionCard;
