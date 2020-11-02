import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks : [],
    portfolio: [],
    filter: 'All',
    sort: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      this.setState(() => ({
        stocks: stocks
      }))
    })
  }

  clickHandler = (stockObj) => {
    this.setState(previousState => 
      ({ portfolio: [...previousState.portfolio, stockObj] }))
  }

  removeHandler = (portfolioObj) => {
    let removedPortfolioStock = this.state.portfolio.filter(stock => stock.id !== portfolioObj.id)
    this.setState(() => ({ portfolio: removedPortfolioStock }))
  }

  sortBy = (e) => {
    let sorted = e.target.value
    this.setState(() => ({ sort: sorted }))
  }

  filterBy = (e) => {
    let filtered = e.target.value 
    this.setState(() => ({ filter: filtered }))
  }


  displayStocksBy = () => {
    let changedStocks = [...this.state.stocks]
    if (this.state.filter !== "All") {
      changedStocks = changedStocks.filter(stock => stock.type === this.state.filter)
    }

    if (this.state.sort === "Alphabetically") {
      return changedStocks.sort((a,b) => a.name > b.name ? 1 : -1)
    } else if (this.state.sort === "Price") {
      return changedStocks.sort((a,b) => a.price > b.price ? 1 : -1)
    }
    return changedStocks
  }

  render() {
    
    return (
      <div>
        <SearchBar sort={this.state.sort} sortBy={this.sortBy} filter={this.state.filter} filterBy={this.filterBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.displayStocksBy()} clickHandler={this.clickHandler} removeHandler={this.removeHandler} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} clickHandler={this.clickHandler} removeHandler={this.removeHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;