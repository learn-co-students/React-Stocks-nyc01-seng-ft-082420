import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    myPort: []
  }

  clickHandler = (stock) => {
    console.log(stock)
    this.setState((prev) => {[stock, ...prev.myPort]})
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

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
