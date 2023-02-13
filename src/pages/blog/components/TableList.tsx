import React from "react";
import classes from "../index.module.scss";

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
    <ul>
      {data.map((item) => {
        return (
          <li className={classes.listItem} key={item.id}>
            <a href={"#" + item.id} className={classes.listItemLink}>
              - {item.title}
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
