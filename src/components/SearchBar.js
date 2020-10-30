import React from 'react';

class SearchBar extends React.Component {
  state = {
    alphabetBtn: false,
    priceBtn: false


  }



  alphChange = () => {
    this.props.radioAlph(this.state.alphabetBtn)
    this.setState(prevState => ({
      alphabetBtn: !prevState.alphabetBtn
    }))

  }

  priceChange = () => {
    this.props.radioPrice(this.state.priceBtn)
  
    this.setState(prevState => ({
      priceBtn: !prevState.priceBtn
    }))

  }

  typeChange = (e) => {
    
    let type = e.target.value
    this.props.fieldType(type)
  }

  

  render() {
    
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="button" value="Alphabetically"  onClick={this.alphChange}/>
        Alphabetically
      </label>
      <label>
        <input type="button" value="Price"  onClick={this.priceChange} />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.typeChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
  }
}


export default SearchBar;
