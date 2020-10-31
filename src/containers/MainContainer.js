import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: [],
    portfolio: [],
    sortStocksByPrice: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({
        stocks: stocks
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
      console.log("hey!")
      // sort alphabetically by selecting the stock's name
    } else if (e.target.value === "Price"){
      let aStocks = [this.state.stocks].sort((a,b) => a-b)
      this.setState(() => ({
        sortStocksByPrice: [...aStocks]
      }))
  }}
        
    render() {
      return (
        <div>
        <SearchBar />

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
