import React from "react";
import styles from "./pagenation.module.css";

const Pagenation = ({ pageList, lastPage, onPageClick }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.pageContainer} onClick={onPageClick}>
        {pageList.map((data) => (
          <li
            key={data}
            className={data > lastPage ? styles.blockedPage : styles.page}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagenation;
