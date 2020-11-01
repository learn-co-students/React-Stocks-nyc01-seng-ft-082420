import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: [],
    portfolio: [],
    sort: "",
    filter: "",
    different: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({
        stocks: stocks,
        different: stocks
      }))
      .catch(console.log)
  }
  
  clickHandler = (stonkObj) => {
    this.setState((previousState) => ({
      portfolio: [...previousState.portfolio, stonkObj]
    }))
  }

  removeStockFromPortfolio = (stonkObj) => {
    let deletePortfolioStonks = this.state.portfolio.filter(stonk => stonk.id !== stonkObj.id)
    this.setState(() => ({
      portfolio: [...deletePortfolioStonks]
    }))
  }

  sortStocks = (e) => {
    if (e.target.value === "Alphabetically"){
      let currentStocks = this.state.stocks.sort((a, b) => a.name > b.name ? 1 : -1)
      this.setState(() => ({
        stocks: currentStocks,
        sort: "Alphabetically"
      }))
    } else if (e.target.value === "Price"){
      let currentStocks = this.state.stocks.sort((a,b) => a.price > b.price ? 1 : -1)
      this.setState(() => ({
        stocks: currentStocks,
        sort: "Price"
      }))
  }}

  filterStocks = (e) => {
    let filterThing = e.target.value
    let filterArray = this.state.different.filter(stonk => stonk.type.includes(filterThing))
    this.setState(() => ({
      stocks: filterArray,
      filter: filterThing
    }))
  }


        
    render() {
      return (
        <div>
        <SearchBar sortStocks={this.sortStocks} sort={this.state.sort} filter={this.state.filter} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stonks={this.state.stocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stonks={this.state.portfolio} clickHandler={this.removeStockFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
