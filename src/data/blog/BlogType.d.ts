type TBlogData = {
  id: string;
  title: string;
  authorName: string;
  date: string;
  cardDescription: string;
  cardBanner: string;
  firstPositionBanner: string;
  mainBanner: string;
  tableContent: {
    title: string;
    id: string;
    nestedList: {
      title: string;
      id: string;
    }[];
  }[];
  pageData: string;
};
