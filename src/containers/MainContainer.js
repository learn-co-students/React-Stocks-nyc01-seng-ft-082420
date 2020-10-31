import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    myPort: []
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
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.clickHandler}/>

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
