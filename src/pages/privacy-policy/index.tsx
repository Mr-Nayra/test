import { NextPage } from "next";
import React from "react";
import classes from "./index.module.scss";
import Link from "next/link";

const index: NextPage = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2 className={classes.tittle}>Privacy Policy</h2>
        <p className={classes.description}>
          The following Privacy Policy governs the online information collection
          practices of UpTrain AI Inc (“Company,” &rdquo;we&rdquo; or
          &rdquo;us&rdquo;). It outlines the types of information that we gather
          about you while you are using our websites{" "}
          <Link href="/">https://uptrain.ai/</Link> (the &rdquo;Sites&rdquo;)
          and the ways in which we use this information.
        </p>

        <h3 className={classes.heading}>Purpose And Scope</h3>
        {/* <p className={classes.description}>● Open-Source Library of UpTrain</p> */}
        <p className={classes.description}>
          The Privacy Policy applies primarily to information that we collect
          online; however, it may apply to some of the data that you provide to
          us offline and/or through other means, as well (for example, via
          telephone, or through the mail).
        </p>
        <p className={classes.description}>
          The Privacy Policy documents and describes the manner in which our
          organization collects information from all our Users/Viewers of our
          Services. While providing our Services on behalf of our registered
          users, we collect information related to Viewers. The use of
          information collected on behalf of our Users is governed primarily by
          our contract for the engagement with them and the privacy policies
          governing their organization. We are not accountable for the privacy
          policies and practices undertaken by our users or any other third
          parties.
        </p>
        <h3 className={classes.heading}>How We Collect Data About You</h3>
        <p className={classes.description}>
          We may collect different data from or about you depending on how you
          use the Sites.
        </p>
        <br />
        <p className={classes.description}>
          <b>Data Collected from Third Parties:</b>
        </p>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.colLeft}`}>
            <p className={classes.description}>
              <b>
                Book a demo, Feedback collection, Subscription for Newsletter
              </b>
            </p>
          </div>
          <div className={`${classes.col} ${classes.colRight}`}>
            <p>
              We collect information and material (user generated content)
              provided to us voluntarily by our users or the viewers to publish
              and process on our platform.
              <br /> The user generated content is inclusive of text, photos &
              videos associated with the accounts/ emails used to create an
              account with UpTrain AI Inc or to access links as viewers.
            </p>
          </div>
        </div>
        <br />
        <p className={classes.description}>
          <b>User Generated Data:</b>
        </p>
        <div className={classes.row}>
          <div className={`${classes.col} ${classes.colLeft}`}>
            <p className={classes.description}>
              <b>
                Integration of Third Parties such as Google Drive, OneDrive,
                Dropbox, Box
              </b>
            </p>
          </div>
          <div className={`${classes.col} ${classes.colRight}`}>
            <p>
              When you connect your existing cloud storage such as Google Drive,
              we access your account on your behalf to get information about
              your files & folders. When you choose to create a Google Drive
              file link in UpTrain AI Inc, we download the selected file(s) from
              your Google Drive and store it in our own storage for reliability
              purposes.
            </p>
          </div>
        </div>

        <p className={classes.description}>
          Some information is collected through the use of cookies, web beacons
          and tracking technologies. Please refer to the Cookie Policy for more
          details on the type of cookies being used.
        </p>

        <div>
          <h3 className={classes.heading}>
            The Types Of Information We Collect And Store
          </h3>
          <p className={classes.description}>
            We may collect personal and sensitive personal information about you
            and store this information in connection with the provision and
            fulfillment of our services to you. Personal information may
            include:
          </p>
          <p className={classes.description}>● First name and last name</p>
          <p className={classes.description}>● Email address</p>
          <p className={classes.description}>● Location</p>
          <p className={classes.description}>● IP Address</p>
        </div>

        <div>
          <h3 className={classes.heading}>
            How We Use Your Personal Information
          </h3>
          <p className={classes.description}>
            The above personal information may be used for the following
            purposes:
          </p>
          <p className={classes.description}>
            ● To provide you with information about our offerings and/or our
            periodic newsletters;
          </p>
          <p className={classes.description}>● To respond to your requests;</p>
          <p className={classes.description}>
            ● For creation or development of business intelligence or data
            analytics in relation to the Offerings provided by us (for this
            purpose we may share the Personal Information with certain software
            or tools available online);
          </p>
          <p className={classes.description}>
            ● To manage our relationship with you;
          </p>
          <p className={classes.description}>● For internal record keeping;</p>
          <p className={classes.description}>
            ● To provide you with authorization to login and use your user
            account;
          </p>
          <p className={classes.description}>
            ● To maintain correct and up-to-date information about you;
          </p>
          <p className={classes.description}>
            ● To identify you as a contracting party;
          </p>
          <p className={classes.description}>● To improve our website;</p>
          <p className={classes.description}>
            ● To enable automated handling of the subscriptions;
          </p>
          <p className={classes.description}>
            ● To otherwise be able to provide the services to you and
          </p>
          <p className={classes.description}>
            ● To comply with our legal or statutory obligations.
          </p>
        </div>
        <h3 className={classes.heading}>
          Who Has Access To Your Data Within Our Organization?
        </h3>
        <p className={classes.description}>
          Within our organization, access to your data is limited to those
          persons who require access in order to provide you with the Products
          and Services, which you purchase from us, to contact you, and to
          respond to your inquiries, including requests for refund. Those staff
          members may be on teams such as: marketing, events, development,
          executive, customer support. Employees only have access to data that
          is relevant to their team, on a ‘need to know’ basis.
        </p>
        <h3 className={classes.heading}>
          Who Do We Share Your Data With Outside Our Organization And Why?
        </h3>
        <p className={classes.description}>
          <b>Processors</b>
        </p>
        <p className={classes.description}>
          We may use service providers & third parties for operating and
          improving the Sites, to assist with certain functions, such as payment
          processing, email transmission, conducting surveys or contests, data
          hosting, managing our ads, third-party solutions for marketing and
          analytics, and some aspects of our technical and customer support. We
          take measures to ensure that these service providers access, process,
          and store information about you only for the purposes we authorize,
          through the execution of Data Processing Agreements or Addenda.
        </p>
        <p className={classes.description}>
          <b>Authorities</b>
        </p>
        <p className={classes.description}>
          We may access, preserve, and disclose information about you to third
          parties, including the content of messages if we believe disclosure is
          in accordance with or required by, applicable law, regulation, legal
          process, or audits. We may also disclose information about you if we
          believe that your actions are inconsistent with our Terms of Service
          or related guidelines and policies, or if necessary to protect the
          rights, property, or safety of, or prevent fraud or abuse of, Company
          or others.
        </p>
        <p className={classes.description}>
          <b>Transfer of business</b>
        </p>
        <p className={classes.description}>
          If we (or our assets) are acquired, or if we go out of business, enter
          bankruptcy, or go through some other change of control, personal
          information could be one of the assets transferred to or acquired by a
          third party.
        </p>
        <h3 className={classes.heading}>
          Why And For How Long Do We Store Information We Collect From You?
        </h3>
        <p className={classes.description}>
          We retain certain information collected from you while you are a
          member on the Site, and in certain cases where you have deleted your
          account, for the following reasons:
        </p>
        <p className={classes.description}>● So that you can use our Sites;</p>
        <p className={classes.description}>
          ● To ensure that we do not communicate with you if you have asked us
          not to;
        </p>
        <p className={classes.description}>
          ● To provide you with a refund, if entitled;
        </p>
        <p className={classes.description}>
          ● To better understand the traffic to our Sites so that we can provide
          all members with the best possible experience;
        </p>
        <p className={classes.description}>
          ● To detect and prevent abuse of our Sites, illegal activities and
          breaches of our Terms of Service; and
        </p>
        <p className={classes.description}>
          ● To comply with applicable legal, tax or accounting requirements.
        </p>
        <p className={classes.description}>
          We retain user data for as long as necessary for the purposes
          described above. This means that we retain different categories of
          data for different periods of time depending on the type of data, the
          category of user to whom the data relates to, and the purposes for
          which we collected the data.
        </p>
        <p className={classes.description}>
          <b>Security</b>
        </p>
        <p className={classes.description}>
          We implement a variety of administrative, managerial, and technical
          security measures to help protect your personal information. Our
          Company has various internal control standards which relate
          specifically to the handling of personal information. These include
          certain controls to help safeguard the information we collect online.
          Our employees are trained to understand and comply with these controls
          and we communicate our Privacy Policy practices and guidelines to our
          employees. However, while we strive to protect your personal
          information, you must also take steps to protect your information. We
          urge you to take every precaution to protect your personal information
          while you are on the Internet.
        </p>
        <h3 className={classes.heading}>Your Rights Under The Gdpr</h3>
        <p className={classes.description}>
          You have certain rights if you are within the EU this includes:
        </p>
        <p className={classes.description}>
          ● <b>Right to access.</b> This right allows you to obtain a copy of
          your personal data, as well as other supplementary information.
        </p>
        <p className={classes.description}>
          ● <b>Right to restrict processing.</b> You have the right to restrict
          the processing of your personal data in certain circumstances.
        </p>
        <p className={classes.description}>
          ● <b>Right to rectification.</b> You have the right to have any
          incomplete or inaccurate information we hold about you corrected.
        </p>
        <p className={classes.description}>
          ● <b>Right to object to processing.</b> The right to object allows you
          to stop or prevent us from processing your personal data. This right
          exists where we are relying on a legitimate interest as the legal
          basis for processing your Personal Data. You also have the right to
          object where we are processing your Personal data for direct marketing
          purposes.
        </p>
        <p className={classes.description}>
          ● <b>Right to erasure.</b> You have the right to ask us to delete or
          remove Personal data when the personal data is no longer necessary for
          the purpose which you originally collected or processed.
        </p>
        <p className={classes.description}>
          To exercise your rights, you can contact us at privacy@UpTrain AI
          Inc.com
        </p>
        <h3 className={classes.heading}>Your Rights Under The CCPA</h3>
        <p className={classes.description}>
          Users who are California residents have certain rights under the
          California Consumer Privacy Act, (“CCPA”) included in these rights
          are:
        </p>
        <p className={classes.description}>
          ● <b>Right to know.</b> You have the right to request to know more
          about the categories and specific pieces of personal information that
          we have collected about you and access a copy of your personal
          information.
        </p>
        <p className={classes.description}>
          ● <b>Right to deletion.</b> You have the right to request deletion of
          personal information that we have collected about you.
        </p>
        <p className={classes.description}>
          ● <b>Right to non-discrimination.</b> If you choose to exercise any of
          your rights under CCPA, we will treat you like all other users. In
          other words, there is no penalty for exercising your rights under
          CCPA. ,
        </p>
        <p className={classes.description}>
          ● <b>Right to opt-out.</b> You have the right to opt-out of the sale
          of your personal information. We do not sell personal information.
          However, the Service Providers we partner with (for example, our
          advertising partners) may use technology on the Service that
          &rdquo;sells&rdquo; personal information as defined by the CCPA. If
          you wish to opt-out of the use of your personal information for
          interest-based advertising purposes and these potential sales as
          defined under CCPA law, you may do so by following the instructions
          below. Please note that any opt out is specific to the browser you
          use. You may need to opt out on every browser that you use.
        </p>
        <p className={classes.description}>
          To exercise any of these rights under CCPA, please email
          privacy@uptrain.ai. To know more about your rights and how to exercise
          them visit our Data Subject Request Policy.
        </p>
        <div>
          <h3 className={classes.heading}>
            Our Policy Concerning Children & Their Data
          </h3>
          <p className={classes.description}>
            Our Sites are not directed to children under the age of sixteen and
            we do not knowingly collect personally identifiable information from
            children or distribute such information to third parties. We screen
            users who wish to provide personal information in order to prevent
            children from providing such information. If we become aware that we
            have inadvertently received personally identifiable information from
            a child, we will delete such information from our records. If we
            change our practices in the future, we will obtain prior, verifiable
            parental consent before collecting any personally identifiable
            information from children.
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>Links To Other Websites</h3>
          <p className={classes.description}>
            Our Sites may contain links to other websites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party&rsquo;s site. We strongly advise you to review the
            Privacy Policy of every site you visit.
          </p>
          <p className={classes.description}>
            Third parties are under no obligation to comply with this Privacy
            Policy with respect to Personal Data that you provide directly to
            those third parties or that those third parties collect for
            themselves. We do not control the third-party sites that may be
            accessible through our Services. Thus, this Privacy Policy does not
            apply to information you provide to third-party sites or gathered by
            the third parties that operate them.
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>Changes To This Policy</h3>
          <p className={classes.description}>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            If we make any material change/s to the Policy, we will notify you
            via email, through a notification posted on the Services, or as
            required by applicable law. You can see when the Policy was last
            updated by checking the date at the bottom of this page. You are
            advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective from when they are
            posted on this page.
          </p>
        </div>
        <div>
          <h3 className={classes.heading}>Contact Us</h3>
          <p className={classes.description}>
            If you have any questions about this Privacy Policy, you can contact
            us at <Link href={"/"}>privacy@uptrain.ai</Link>
          </p>
          <p className={classes.description}>
            <b>Last Updated:</b> March 28, 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
