import React from 'react';

const SearchBar = (props) => {

  function searchBarSort(e){
    props.sortBy(e)
  }

  function searchBarFilter(e){
    props.filterBy(e)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === 'Alphabetically'} onChange={searchBarSort} />
        Alphabetically
        
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === 'Price'} onChange={searchBarSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={props.filter} onChange={searchBarFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
