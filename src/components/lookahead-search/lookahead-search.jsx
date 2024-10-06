import { Link } from "react-router-dom";
import FilterIconSVG from "../icons/filter";
import SearchIconSVG from "../icons/search";

import styles from "./lookahead-search.module.css";

const LookaheadSearch = ({ searchTerm, setSearchTerm, filteredProducts }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.lookaheadSearch}>
      <FilterIconSVG />
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchIconSVG className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default LookaheadSearch;
