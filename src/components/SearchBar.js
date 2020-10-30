import React from 'react';

const SearchBar = props => {
  console.log(props)
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={props.sortValue === "Alphabetically"} onChange={props.sortHandler}/>
          Alphabetically
        </label>
        <label>
          <input type="radio"  value="Price" checked={props.sortValue === "Price"} onChange={props.sortHandler}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select value={props.filterValue} onChange={props.filterHandler}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    )
}

export default SearchBar;
