import React from "react";
import PropTypes from "prop-types";


function HerbalinSearch({ keyword, keywordChange }){
    return (
        <div className="search-bar">
            <input type="search" placeholder=" Search by product name ..." value={keyword} onChange={(event) => keywordChange(event.target.value)} />
        </div>
    )
}

HerbalinSearch.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default HerbalinSearch;