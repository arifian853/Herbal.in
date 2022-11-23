import React from "react";
import PropTypes from "prop-types";

function HerbalinFilter({ selectedFilter, setSelectedFilter }){
    return (


        <div className="filter-item">
           <label>
            Filter by category :
            </label> 
            <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
           <option value="">---</option>
           <option value="Obat Tradisional">Obat Tradisional</option>
           <option value="Fitofarmaka">Fitofarmaka</option>
         
           </select>
         

        </div>
        
    )
}

HerbalinFilter.propTypes = {
    selectedFilter: PropTypes.string,
    setSelectedFilter: PropTypes.func.isRequired
}

export default HerbalinFilter;