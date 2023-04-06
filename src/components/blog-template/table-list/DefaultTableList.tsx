import React from "react";
import classes from "./tableList.module.scss";
import tableListPoint from "../../../images/tableListPoint.png";
import Image from "next/image";
import WhiteCircle from "@/components/eclipse/WhiteCircle";
import FillEclipse from "@/components/eclipse/FillEclipse";

interface IProps {
  data: {
    title: string;
    id: string;
    nestedList?: {
      title: string;
      id: string;
    }[];
  }[];
}

const TableList = (props: IProps) => {
  const { data } = props;
  return (
    <ul style={{ position: "relative" }}>
      <WhiteCircle size={120} top={-20} left={-30} />
      <WhiteCircle size={120} bottom={-100} right={-20} />
      <FillEclipse size={300} left={"-55%"} top={"30%"} />
      <FillEclipse size={300} left={"-55%"} top={"30%"} />

      {data.map((item) => {
        return (
          <li className={classes.listItem} key={item.id}>
            <a href={"#" + item.id} className={classes.listItemLink}>
              <Image
                src={tableListPoint}
                width={13}
                alt="Pointer Icon"
                style={{ marginRight: 14, marginTop: 3 }}
              />{" "}
              <span style={{ flex: 1 }}>{item.title}</span>
            </a>
            {item.nestedList && item.nestedList.length > 0 && (
              <ul className={classes.nestedListItem}>
                {item.nestedList?.map((data) => {
                  return (
                    <li key={data.id}>
                      <a
                        href={"#" + data.id}
                        className={classes.nestedListItemLink}
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TableList;
