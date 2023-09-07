import React, { useState } from "react";
import styles from "./SortOptions.module.css";

const SortOptions = ({ onSortChange }) => {
  const [criteria, setCriteria] = useState("date");
  const [order, setOrder] = useState("asc");

  const handleSortChange = () => {
    onSortChange(criteria, order);
  };

  return (
    <div className={styles.sortContainer}>
      <div className={styles.group}>
        <label htmlFor="sortCriteria" className={styles.sortLabel}>
          Sort by
        </label>
        <select
          id="sortCriteria"
          className={styles.sortSelect}
          defaultValue="date"
          onChange={(e) => setCriteria(e.target.value)}
        >
          <option value="date">date</option>
          <option value="rating">rate</option>
          <option value="thumbsUp">likes</option>
        </select>
      </div>
      <div className={styles.group}>
        <label htmlFor="sortOrder" className={styles.sortLabel}>
          order by
        </label>
        <select
          id="sortOrder"
          className={styles.sortSelect}
          defaultValue="asc"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="desc">descending</option>
          <option value="asc">ascending</option>
        </select>
      </div>
      <button className={styles.sortButton} onClick={handleSortChange}>
        Sort
      </button>
    </div>
  );
};

export default SortOptions;
