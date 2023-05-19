import { NextPage } from "next";
import React from "react";
import classes from "./index.module.scss";
import Link from "next/link";

const index: NextPage = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2 className={classes.tittle}>Cookies Policy</h2>
        <p className={classes.description}>
          The Cookies Notice explains how UpTrain AI uses cookies and similar
          technologies in the course of our business, through our website
          UpTrain AI. It explains what these technologies are, and why we use
          them, as well as your rights to control our use of them.
        </p>
        <div>
          <h3 className={classes.heading}>What Is A Cookie?</h3>
          <p className={classes.description}>
            Cookies are small text files that a website asks the user’s browser
            to save on the user’s system/device, when a user visits the website,
            in order to remember the user’s device upon revisiting the website
            or during the session. Cookies set up by the domain{" "}
            <Link href={"/"}>UpTrain AI</Link> , are called first-party cookies
            and cookies set by other domain(s) than the website(s) you are
            visiting are termed as third-party cookies. Third-party cookies are
            generally used for marketing and advertising purposes.{" "}
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>Purpose Of Using Cookies? </h3>
          <p className={classes.description}>
            Our website <Link href={"/"}>UpTrain AI</Link> (“UpTrain AI” or “We”
            or “Our” or “Website”) uses cookies and other tracking technologies
            for the following purposes:
          </p>
          <ol>
            <li>
              <p>To analyze your use of our website</p>
            </li>
            <li>
              <p className={classes.description}>
                For promotional and marketing purposes
              </p>
            </li>
            <li>
              <p className={classes.description}>
                To understand your preferences such as preferred language
              </p>
            </li>
            <li>
              <p className={classes.description}>
                To deliver information that matches your interests
              </p>
            </li>
            <li>
              <p className={classes.description}>
                To help us understand our audience and traffic patterns
              </p>
            </li>
            <li>
              <p className={classes.description}>
                To let you automatically log into programs and parts of our site
                that require membership
              </p>
            </li>
            <li>
              <p className={classes.description}>
                To manage and present the information displayed on our website
              </p>
            </li>
          </ol>
        </div>
        <div>
          <h3 className={classes.heading}>
            Types Of Cookies Used By Uptrain Ai
          </h3>
          <ol>
            <li>
              <p>Strictly Necessary Cookies </p>
            </li>
            <li>
              <p className={classes.description}>Targeting Cookies</p>
            </li>
            <li>
              <p className={classes.description}>Functionality Cookies</p>
            </li>
            <li>
              <p className={classes.description}>Performance Cookies</p>
            </li>
          </ol>
        </div>
        <div>
          <h3 className={classes.heading}>Cookie List</h3>
          <p className={classes.description}>
            The table below provides additional details on the specific cookies
            used on <Link href={"/"}>UpTrain AI</Link> :{" "}
          </p>
          <p className={classes.description}>
            <b>Strictly Necessary Cookies -</b> Some cookies are required for
            technical reasons in order for our websites to support functions
            such as logging in, and payment transactions.
          </p>
          <p className={classes.description}>
            Targeted Cookies - These cookies may be set through our site by our
            advertising partners. They may be used by those companies to build a
            profile of your interests and show you relevant adverts on other
            sites. They do not store direct personal information but are based
            on uniquely identifying your browser and internet device.
          </p>
          <p className={classes.description}>
            <b> Functionality Cookies - </b> Functionality cookies enable us to
            provide additional functions to you on our site such as
            personalization and remembering your saved preferences.
          </p>
          <p className={classes.description}>
            <b>Performance Cookies - </b> Performance cookies are cookies used
            specifically for gathering data on how visitors use a website, which
            pages of a website are visited most often, or if they get error
            messages on web pages. These cookies monitor only the performance of
            the site as the user interacts with it. These cookies don’t collect
            identifiable information on visitors, which means all the data
            collected is anonymous and only used to improve the functionality of
            a website. Any cookie, whose purpose has not been identified by us
            or is unknown to our current understanding, is classified together
            as “Unclassified Cookies”. Such cookies may or may not adhere to our
            policy and we cannot take ownership of said cookies, however, we
            would periodically and actively try to investigate them and
            categorize them in their respective cookie categories for the
            benefit of our users, partners and customers.
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>
            Other Tracking Technologies Like Web Beacons
          </h3>
          <p className={classes.description}>
            Cookies are not the only way to recognize or track visitors on a
            website. We may use other similar technologies from time to time,
            like web beacons (sometimes called “tracking pixels” or “clear
            gifs”). These are tiny graphics files that contain a unique
            identifier that enables us to recognize when someone has visited our
            websites or opened an e-mail including these. In many instances,
            these technologies are reliant on cookies to function properly, and
            hence, declining cookies will impair their functioning. egories for
            the benefit of our users, partners and customers.
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>
            How Can I Control The Cookie Preferences?
          </h3>
          <p className={classes.description}>
            Most browsers are set to accept cookies by default. However, you may
            remove or reject cookies in your browser’s settings. Removing or
            rejecting the cookies may affect the performance of the website. You
            may opt-out of the DoubleClick cookie by visiting the Google
            advertising opt-out page:{" "}
            <Link
              href={"https://policies.google.com/technologies/ads"}
              target="_blank"
              rel="noreferrer"
            >
              http://www.google.com/policies/privacy/ads/
            </Link>{" "}
            . Or you may opt-out of Google Analytics by visiting the Google
            Analytics Opt-out page:{" "}
            <Link
              href={"https://tools.google.com/dlpage/gaoptout"}
              target="_blank"
              rel="noreferrer"
            >
              http://tools.google.com/dlpage/gaoptout
            </Link>
            .
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>Update And Review</h3>
          <p className={classes.description}>
            We may update this Cookie Policy from time to time, therefore, we
            encourage you to periodically review this page for the latest
            information on the Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
