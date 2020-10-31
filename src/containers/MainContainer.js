import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({
        stocks: stocks
      }))
      .catch(console.log)
  }
  
  /*clickHandler for catching the info from the stock card in container*/
  clickHandler = (stonkObj) => {
    // let currentStocks = [...this.state.stocks]
    this.setState((previousState) => ({
      portfolio: [...previousState.portfolio, stonkObj]
    }))
  }


  // removeStockFromPortfolio = (obj) => {
  //   let currentStocks = [...this.state.stocks]
  //   // let myPortfolioStocks = currentStocks

  //   let myPortfolioStocks = [...this.state.stocks, obj]
  //   for (let i = 0; i < myPortfolioStocks.length; i++){
  //     if (myPortfolioStocks[i] === obj){
  //       myPortfolioStocks.splice(i, 1)
  //     }
  //   }
  //   this.setState(() => ({
  //     stocks: myPortfolioStocks
  //   }))
  // }
        
    render() {
      return (
        <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stonks={this.state.stocks} clickHandler={this.clickHandler}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stonks={this.state.portfolio} /*clickHandler={this.removeStockFromPortfolio} */ />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
