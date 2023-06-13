import { StaticImageData } from "next/image";

type TBlogData = {
  id: string;
  title: string;
  authorName: string;
  date: string;
  cardDescription: string;
  cardBanner: StaticImageData;
  firstPositionBanner: StaticImageData;
  longDescription: string;
};
