import React from "react";
import classes from "./faqSection.module.scss";
import { faqData } from "@/utils/faqData";
import FAQ from "./faq";

const FaqSection = () => {
  return(
    <>
      <div className={classes.root}>
        <h1 className={classes.heading}>Frequently Asked Questions</h1>
        <div className={classes.accordion}>
          {faqData.map((faq, index) => (
            <FAQ
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FaqSection;