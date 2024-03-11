import React from "react";
import styles from "./itemNotFound.module.scss";

type Props = {
  children?: string | JSX.Element | JSX.Element[] 
}

export const ItemNotFound = ({children}:Props) => {
  return (
    <div className="content">
      <div className="container">
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};
