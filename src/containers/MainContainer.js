import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  //moved the api up into main (from stockContainer) in order to pass down filtered list based on SearchBar input
  state = {
    api: [],
    portfolio: [],
    filter: "",
    sort: ""
  }

  // fetch stocks after component mounts //
  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(stocks => this.setState(() => ({ api: stocks })))
  }

  // -------------------------------------- //
  // add/remove from portfolio
  addToPortfolio = stockObj => {
    if(this.state.portfolio.includes(stockObj)) return

    let updatedPortfolio = [stockObj, ...this.state.portfolio]
    this.setState(() => (
      {portfolio: updatedPortfolio}
    ))
  }

  removeFromPortfolio = stockObj => {
    let updatedPortfolio = this.state.portfolio.filter(stock => stock !== stockObj)
    this.setState(() => (
      {portfolio: updatedPortfolio}
    ))
  }
  // -------------------------------------- //
  // set state for filter and filter stocks to render //
  filterHandler = e => {
    this.setState( {filter: e.target.value} )
  }

  filteredStocks = () => {
    return this.state.api.filter(stock => stock.type.includes(this.state.filter))
  }

  // -------------------------------------- //
  // set state for sort and sort stocks to render //
  sortHandler = e  => {
    const sortValue = e.target.value
    this.setState( {sort: sortValue} )
  }

  alphabeticalSort = stocksArray => {
    return stocksArray.sort((a, b) => {
      if(a.name < b.name) {
        return -1
      }
      if(a.name > b.name) {
        return 1
      }
      return 0
    })
  }

  priceSort = stocksArray => {
    return stocksArray.sort((a, b) => a.price - b.price)
  }

  sortedAndFilteredStocks = () => {
    let filtered = this.filteredStocks()
    if(this.state.sort === "") return filtered

    if(this.state.sort === "Alphabetically") {
      return this.alphabeticalSort(filtered)
    } else {
      return this.priceSort(filtered)
    }
  }
  // -------------------------------------- //
  render() {
    return (
      <div>
        <SearchBar sortValue={this.state.sort} sortHandler={this.sortHandler} filterValue={this.state.filter} filterHandler={this.filterHandler} />
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.sortedAndFilteredStocks()} clickHandler={this.addToPortfolio}/>
            </div>
            <div className="col-4">
              <PortfolioContainer clickHandler={this.removeFromPortfolio} portfolio={this.state.portfolio}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
