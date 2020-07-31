import React from "react"

const FilterButton = props => {
  return (
    <button
      className="listen library-filter-button"
      style={
        props.FilterValue
          ? { background: "#23abe2" }
          : { background: "#bbbbbb" }
      }
      onClick={props.handler}
    >
      {props.FilterName}
      
    </button>
  )
}
export default FilterButton
