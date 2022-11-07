import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function SearchBar({ keyword, keywordChange }) {
   const { locale } = React.useContext(LocaleContext);

   return (
      <div className="search-bar">
         <input
            className="search-bar__input"
            type="text"
            placeholder={
               locale === "en" ? "Search by title" : "Cari berdasarkan nama"
            }
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
         />
      </div>
   );
}

SearchBar.propType = {
   keyword: PropTypes.string.isRequired,
   keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
