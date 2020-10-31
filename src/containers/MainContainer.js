import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({stocks: stocks}))
      .catch(console.log)
  }
  
  /*clickHandler for catching the info from the stock card in container*/
  clickHandler = (id) => {
    let currentStocks = [...this.state.stocks]
    // find the duplicate
    let myPortfolioStocks = currentStocks.find(stonk => stonk.id === id)
    this.setState(() => ({
      stocks: currentStocks
    }))
  }

  filterStocks = () => {
    // console.log(this.state.stocks)
    return this.state.stocks.filter(stonk => stonk.id)
  }

  removeStockFromPortfolio = (id) => {
    let currentStocks = [...this.state.stocks]
    let myPortfolioStocks = currentStocks.find(stonk => stonk.id === id)
    this.setState(() => ({
      stocks: currentStocks
    }))
  }
        
    render() {
      return (
        <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stonks={this.state.stocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stonks={this.filterStocks()} clickHandler={this.removeStockFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
