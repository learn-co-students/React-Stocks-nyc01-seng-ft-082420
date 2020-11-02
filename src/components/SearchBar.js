import React from 'react';

const SearchBar = (props) => {

  function sortChangeHandler(e){
    props.sortBy(e)
  }
  function filterChangeHandler(e){
    props.filterBy(e)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort=== "Alphabetically"} onChange={sortChangeHandler}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "Price"} onChange={sortChangeHandler}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={props.filter} onChange={filterChangeHandler}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;