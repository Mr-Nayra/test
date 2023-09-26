import React from "react";
import classes from "./faqSection.module.scss";
import { faqData } from "@/utils/faqData";
import FAQ from "./faq";
import Line from "../line/line";

const FaqSection = () => {
  return(
    <>
      <div className={classes.root}>
        <h1 className={classes.heading}>Frequently Asked Questions</h1>
        <div className={classes.accordion}>
          {faqData.map((faq, index) => (
            <div>
            <FAQ
              question={faq.question}
              answer={faq.answer}
            />
            {index < faqData.length-1 && <Line />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FaqSection;