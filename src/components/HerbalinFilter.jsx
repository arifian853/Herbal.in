import React from "react";
import PropTypes from "prop-types";

function HerbalinFilter({ selectedFilter, setSelectedFilter }){
    return (
        <div className="filter-item">
            <label>
                Filter berdasarkan kategori :
            </label> 

            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                <option value="">---</option>
                <option value="O.H. Terstandar">O.H. Terstandar </option>
                <option value="Fitofarmaka">Fitofarmaka </option>
                <option value="Jamu">Jamu</option>
            </select>
        </div>
    )
}

HerbalinFilter.propTypes = {
    selectedFilter: PropTypes.string,
    setSelectedFilter: PropTypes.func.isRequired
}

export default HerbalinFilter;