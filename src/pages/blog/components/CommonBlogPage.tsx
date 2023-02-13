import React from "react";
import classes from "../index.module.scss";
import TableList from "./TableList";
import parse from "html-react-parser";

interface IProps {
  data: TBlogData;
}

const CommonBlogPage = (props: IProps) => {
  const { authorName, date, title, pageData, mainBanner, tableContent } =
    props.data;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.tableContainer}>
            <TableList data={tableContent} />
          </div>

          <div className={classes.mainContainer}>
            <div>
              <img
                className={`${classes.bannerImg}`}
                src={mainBanner}
                alt="biasSystemBanner"
              />
            </div>

            <div className={classes.mainContent}>
              <div className={classes.topSpacing} id="introduction">
                <h1 className={classes.heading}>{title}</h1>
                <h5 className={classes.publicDate}>
                  {authorName} | {date}
                </h5>
              </div>
              <div className={classes.dataContainer}>{parse(pageData)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBlogPage;
