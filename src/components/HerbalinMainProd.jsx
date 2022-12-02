import React from "react";
import PropTypes from "prop-types";
import HerbalinSearch from "./HerbalinSearch";
import HerbalinFilter from "./HerbalinFilter";

const HerbalinMainProd = ({ keyword, keywordChange, selectedFilter, setSelectedFilter }) => {
    return (
        <div>
            <h1 className="product-page-text">Product Page</h1>
            <HerbalinSearch keyword={keyword} keywordChange={keywordChange} />
            <HerbalinFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        </div>
    )
}

HerbalinMainProd.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string,
    setSelectedFilter: PropTypes.func.isRequired
}

export default HerbalinMainProd;