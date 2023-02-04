import React, { Fragment } from "react";
import { useParams } from "react-router";
import AboutRetraining from "./AboutRetraining";
import BiasRecommenderSystems from "./BiasRecommenderSystems";
import BlogCards from "./components/BlogCards";
import DataDriftDetection from "./DataDriftDetection";

const BlogPage = () => {
  const blogId = useParams().id;

  const blogSection = () => {
    switch (blogId) {
      case "bias-in-recommendation-systems":
        return <BiasRecommenderSystems />;
      case "why-do-we-need-to-care-about-retraining":
        return <AboutRetraining />;
      case "5-great-statistical-methods-for-data-drift-detection":
        return <DataDriftDetection />;

      default:
        break;
    }
  };

  return (
    <Fragment>
      {blogSection()}
      <BlogCards blogId={blogId} />
    </Fragment>
  );
};

export default BlogPage;
