import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    myPort: [],
  }

  getFilterTerm = (term) => {
    if (term === "Alphabetically" || term=== "Price") {
      this.setState(() => ({sort: term}))
    } else {
      this.setState(() => ({filter: term}))
    }
    
  }

  clickHandler = (stock) => {
    this.setState((prev) => ({myPort: [stock, ...prev.myPort]}))
  }

  removeClickHandler = (stock) => {
    const updatedStocks = [...this.state.myPort]
    const index = updatedStocks.findIndex( stockk => stockk.id === stock.id) 
    updatedStocks.splice(index, 1)
    this.setState(()=> ({myPort: updatedStocks}))
  }

  render() {
    return (
      <div>
        <SearchBar filterHandler={this.getFilterTerm} sort={this.state.sort} />

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler} sort={this.state.sort} filter={this.state.filter}/>

            </div>
            <div className="col-4">

              <PortfolioContainer clickHandler={this.removeClickHandler} stocks={this.state.myPort}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
