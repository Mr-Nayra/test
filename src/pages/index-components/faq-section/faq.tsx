import React, {useState} from "react";
import classes from "./faqSection.module.scss";
import chevron_up from "./images/chevron_up_icon.webp";
import chevron_down from "./images/chevron_down_icon.webp";
import Image from "next/image";

interface IFAQ {
  question: string;
  answer: string;
}

const FAQ = (props: IFAQ) => {
  const {question, answer} = props;
  const [isActive, setIsActive] = useState(false);

  return(
    <>
      <div className={classes.faq}>
        <div className={classes.questionContainer} onClick={() => setIsActive(!isActive)}>
          <div className={classes.question}>{question}</div>
          <div>{isActive ? <Image src={chevron_up} alt="chevron_up" /> : <Image src={chevron_down} alt="chevron_down" />}</div>
        </div>

        {isActive && <div className={classes.answer}>{answer}</div>}
      </div>
    </>
  )
}

export default FAQ;